import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { ContainerLoginComponent } from './containerLogin/containerLogin.component';
import { TitleLoginComponent } from './title/title.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    LoginComponent,
    ContainerLoginComponent,
    TitleLoginComponent,
    FormLoginComponent,
  ],
})
export class LoginModule {}
