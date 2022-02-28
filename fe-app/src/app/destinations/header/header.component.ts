import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-destiny',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  showCode: boolean = false;
  showPax: boolean = false;

  name = {
    first: '',
    last: '',
  }

  constructor(private Auth: AuthService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.activatedRoute.data.subscribe((data) => {
      this.showCode = data['showCode'];
      this.showPax = data['showPax'];
    });

    this.name.first = this.Auth.infoSession().firstName
    this.name.last = this.Auth.infoSession().lastName
  }

  logout() {
    this.Auth.logout()
  }
}