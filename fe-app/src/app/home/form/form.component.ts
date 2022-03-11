import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apiService: ApiService

  ) {
    this.form = this.formBuilder.group({
      code: [null, Validators.required],
    });
  }

  ngOnInit() {}

  onAccept(): void {
    if (this.form.valid) {
      const code = this.form.get('code')?.value;
      this.apiService.get(`/reservations/${code}/get-rooms`).subscribe({
        next: (data) => {
          if(!data){
            alert('El codigo no existe o no es valido');
            return;
          }
          this.router.navigate([`/reservas/${code}`]);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}
