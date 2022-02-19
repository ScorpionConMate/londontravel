import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-destiny',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = 'Juan Perez';

  constructor() { }

  ngOnInit() {}

}
