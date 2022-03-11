import { AfterContentInit, AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormHabitacionesComponent implements OnInit {
  @Input() room: any;

  // @ts-ignore
  passengerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  get passengers(): FormArray {
    return this.passengerForm.get('passengers') as FormArray;
  }
  ngOnInit(): void {
    this.passengerForm = this._fb.group({
      passengers: this._fb.array(this.room.passengers.map((passenger: any) => this.initPassenger(passenger)))
    });
  }

  initPassenger(passenger?: any) {
    const group = this._fb.group({
      fullName: [passenger.fullName || '', Validators.required],
      instagram: [passenger.instagram || '', Validators.required],
    })
    if (group.value.fullName || group.value.instagram) {
      group.get('fullName')?.disable();
      group.get('instagram')?.disable();
    }
    return group;
  }

  transformTurn(value: 'morning' | 'afternoon' | 'night'): string {
    const HourTurn = {
      morning: 'Mañana',
      afternoon: 'Tarde',
      night: 'Noche',
    };

    return HourTurn[value];
  }

  disableLoad(index: number) {
    const values = this.passengers.controls[index];


    return !!values.get('fullName')?.value && !!values.get('instagram')?.value && values.disabled;
  }

  onSubmit(i: number) {
    const data = this.passengers.controls[i].value;
    this.apiService.put(`/reservations/set-room/${this.room._id}`, data).subscribe({
      next: (data) => {
        this.passengers.controls[i].get('fullName')?.disable();
        this.passengers.controls[i].get('instagram')?.disable();
        this.goFinalStep();
      }
    })
  }

  addPassenger() {
    this.passengers.push(this.initPassenger({
      fullName: '',
      instagram: '',
    }));
  }

  disableNewPassenger() {
    return this.passengers.controls.length >= 4;
  }

  goFinalStep(){
    this.router.navigate([`/reservas/${this.route.snapshot.url[0].path}/finish`]);
  }

}
