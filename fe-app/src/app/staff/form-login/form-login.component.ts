import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  form = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService
  ) {}

  ngOnInit() {}

  sendRegister() {
    this.service
      .registerUser(this.form.value.username, this.form.value.password)
      .subscribe((data) => console.log(data));
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
}
