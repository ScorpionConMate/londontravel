import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { transformTurn } from 'src/app/helpers/utils';
import { School } from 'src/app/models/school';
import { ReservationsService } from 'src/app/services/reservations.service';
import { PaxListComponent } from '../pax-list/pax-list.component';

@Component({
  selector: 'app-ShowPax',
  templateUrl: './ShowPax.component.html',
  styleUrls: ['./ShowPax.component.scss'],
})
export class ShowPaxComponent implements OnInit {
  token: string = '';

  schools?: any[];

  constructor(
    private service: ReservationsService,
    private dialog: MatDialog,
    ) {}

  ngOnInit() {
    // @ts-ignore
    this.token = localStorage.getItem('token');

    this.service.getMyReservations(this.token).subscribe({
      next: (data: any) => {
        // @ts-ignore
        this.schools = data.schools;
      }
    });
  }

  removeCode() {
    sessionStorage.removeItem('code');

  }

  removeToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('code');
  }
  transformTurn(value: any): string {
    const HourTurn = {
      morning: 'Mañana',
      afternoon: 'Tarde',
      night: 'Noche',
    };

    // @ts-ignore
    return HourTurn[value] ?? '';
  }

  showInfo(code: string) {
    this.dialog.open(PaxListComponent, {
      data: {
        code,
      },
      minWidth: '50%',
    })
  }
}
