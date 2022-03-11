import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availables',
  templateUrl: './availables.component.html',
  styleUrls: ['./availables.component.css'],
})
export class AvailablesComponent {
  @Input() roomsAvailable: any[] = [];
  reservationCode: string;
  constructor(
    private router: Router
  ){
    this.reservationCode = this.router.url.split('/')[2]
  }
  setUserRoom(roomId: any){
    this.router.navigate([`/reservas/${this.reservationCode}/2/${roomId._id}`]);

  }
}
