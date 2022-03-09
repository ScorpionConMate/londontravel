import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  form = this.buildForm();

  constructor(private formBuilder: FormBuilder, private service: AuthService) {}

  ngOnInit() {}

  sendLogin() {
    this.service.login(this.form.value.username, this.form.value.password);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
}
