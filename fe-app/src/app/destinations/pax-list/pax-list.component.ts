import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pax-list',
  templateUrl: './pax-list.component.html',
  styleUrls: ['./pax-list.component.scss']
})
export class PaxListComponent implements OnInit {

  infoPax: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {code: string},
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getReservationsData();
  }

  getReservationsData(){
    this.apiService.get(`reservations/${this.data.code}/get-rooms`).subscribe({
      next: (data: any) => {
        this.infoPax = data.school.rooms;
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }
}
