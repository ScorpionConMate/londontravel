import { Component, OnInit } from '@angular/core';
import { DestinyService } from 'src/app/services/destiny.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import getCurrentYearAndPlus from 'src/utils/date';
import { School } from 'src/app/models/school';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
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
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getDestinies();
    this.payloadForm = new FormGroup({
      destiny: new FormControl(null, Validators.required),
      colegio: new FormControl(null, Validators.required),
      division: new FormControl(null, Validators.required),
      turno: new FormControl(null, Validators.required),
      localidad: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      cantidad: new FormControl(null, Validators.required),
    });
    sessionStorage.removeItem('code');
  }

  sendReservation() {


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
    // @ts-ignore
    const validation = Object.keys(this.payloadForm.value).some((val) => Boolean(this.payloadForm.value[val]))
    if (!validation) {
      alert('Por favor complete todos los campos');
      return;
    }

    this.service.createReservation(payload).subscribe(
      {
        next: (response: any) => {
          sessionStorage.setItem('code', response?.code);

        },
        error: (error) => {
          alert('Ocurrió un error, por favor intente más tarde');
        }
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
