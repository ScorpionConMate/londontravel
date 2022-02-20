import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showCode',
  templateUrl: './showCode.component.html',
  styleUrls: ['./showCode.component.scss'],
})
export class ShowCodeComponent implements OnInit {
  codigo: string = '';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      // @ts-ignore
      this.codigo = sessionStorage.getItem('code');
    }, 1000);
  }

  removeCode() {
    sessionStorage.removeItem('code');
  }

  removeToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('code');
  }
}
