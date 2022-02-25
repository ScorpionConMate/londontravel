import { Component, Input, OnInit } from '@angular/core';
import { DestinyService } from 'src/app/services/destiny.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import getCurrentYearAndPlus from 'src/utils/date';
import { School } from 'src/app/models/school';
@Component({
  selector: 'app-formDestiny',
  templateUrl: './formDestiny.component.html',
  styleUrls: ['./formDestiny.component.scss']
})

export class FormDestinyComponent implements OnInit {
  date: number[] = getCurrentYearAndPlus();

  HourTurn = {
    morning: 'Mañana',
    afternoon: 'Tarde',
    night: 'Noche'
  }

  payloadForm!: FormGroup;

  constructor(private service: DestinyService, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.payloadForm = new FormGroup({
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

    const payload: {destiny: string, school: School} = {
      destiny: "jurere",
      school: {
       name: this.payloadForm.value.colegio,
       turn: this.payloadForm.value.turno,
       division: this.payloadForm.value.division,
       location: this.payloadForm.value.localidad,
       travelYear: this.payloadForm.value.fecha,
       passengersQuantity: this.payloadForm.value.cantidad
    }
  }
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

}
