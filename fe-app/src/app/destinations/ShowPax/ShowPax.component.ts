import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-ShowPax',
  templateUrl: './ShowPax.component.html',
  styleUrls: ['./ShowPax.component.scss'],
})
export class ShowPaxComponent implements OnInit {
  token: string = '';

  schools: School[] = Array<School>();

  constructor(private service: ReservationsService) {}

  ngOnInit() {
    // @ts-ignore
    this.token = localStorage.getItem('token');

    this.service.getMyReservations(this.token).subscribe((res) => {
      // @ts-ignore
      this.schools = res.schools.map((escuela: any) => {
        return {
          name: escuela.school?.name,
          turn: escuela.school?.turn,
          division: escuela.school?.division,
          location: escuela.school?.location,
          travelYear: escuela.school?.travelYear,
          passengersQuantity: escuela.school?.passengersQuantity,
        };
      });
      return this.schools;
    });

    
  }
}
