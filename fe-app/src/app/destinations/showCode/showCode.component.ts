import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-showCode',
  templateUrl: './showCode.component.html',
  styleUrls: ['./showCode.component.scss'],
})
export class ShowCodeComponent implements OnInit {
  codigo: string = '';

  constructor() { }

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

  share() {
    console.log('share');
    if (navigator.share) {
      navigator.share({
        title: 'Reserva de viaje',
        text: 'Comparte tu código de reserva',
        url: environment.urlApp
      }).then(() => {
        console.log('Successful share');
      }).catch(e => {
        console.log('Error sharing', e);
      })
    }else{
      console.log('No share');
    }
  }
}
