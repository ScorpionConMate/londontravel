import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.form = this.formBuilder.group({
      code: [null, Validators.required],
    });
  }

  ngOnInit() {}

  onAccept(): void {
    if (this.form.valid) {
      const code = this.form.get('code')?.value;
      this.router.navigate([`/reservas/${code}`]);
    }
  }
}
