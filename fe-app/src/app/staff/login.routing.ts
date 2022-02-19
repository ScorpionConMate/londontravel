import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ContainerLoginComponent } from './containerLogin/containerLogin.component';

const routes: Routes = [
  { path: '', component: ContainerLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [LoginService],
  exports: [RouterModule]
})

export class LoginRoutingModule {}
