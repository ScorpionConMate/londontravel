import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormDestinyComponent } from '../formDestiny/formDestiny.component';
@Component({
  selector: 'app-containerDestiny',
  templateUrl: './containerDestiny.component.html',
})
export class ContainerDestinyComponent implements OnInit {
  showCode: boolean = false;

  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.showCode = data['showCode'];
    });
  }
}
