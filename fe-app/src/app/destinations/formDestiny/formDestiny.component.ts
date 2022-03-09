import { Component, OnInit } from '@angular/core';
import { DestinyService } from 'src/app/services/destiny.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import getCurrentYearAndPlus from 'src/utils/date';
import { School } from 'src/app/models/school';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-formDestiny',
  templateUrl: './formDestiny.component.html',
  styleUrls: ['./formDestiny.component.scss'],
})
export class FormDestinyComponent implements OnInit {
  date: number[] = getCurrentYearAndPlus();

  HourTurn = {
    morning: 'Mañana',
    afternoon: 'Tarde',
    night: 'Noche',
  };

  payloadForm!: FormGroup;
  destinies: any;

  constructor(
    private service: DestinyService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getDestinies();
    this.payloadForm = new FormGroup({
      destiny: new FormControl(null),
      colegio: new FormControl(null),
      division: new FormControl(null),
      turno: new FormControl(null),
      localidad: new FormControl(null),
      fecha: new FormControl(null),
      cantidad: new FormControl(null),
    });
    sessionStorage.removeItem('code');
  }

  sendReservation(event: any) {
    event.preventDefault();

    const payload: { destiny: string; school: School } = {
      destiny: this.payloadForm.value.destiny,
      school: {
        name: this.payloadForm.value.colegio,
        turn: this.payloadForm.value.turno,
        division: this.payloadForm.value.division,
        location: this.payloadForm.value.localidad,
        travelYear: this.payloadForm.value.fecha,
        passengersQuantity: this.payloadForm.value.cantidad,
      },
    };
    this.service.createReservation(payload).subscribe(
      (response) => {
        // @ts-ignore
        sessionStorage.setItem('code', response?.code);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async getDestinies() {
    this.http
      .get(`${environment.baseUrl}/destinations`)
      .subscribe((response: any) => {
        this.destinies = response;
      });
  }
}
