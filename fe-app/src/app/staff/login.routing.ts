import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Authv2Guard } from '../helpers/authv2.guard';
import { LoginService } from '../services/login.service';
import { ContainerLoginComponent } from './containerLogin/containerLogin.component';

const routes: Routes = [
  { path: '', component: ContainerLoginComponent },
  {
    path: 'destinations',
    loadChildren: () => import('../destinations/destinations.module').then(m => m.DestinationsModule),
    canLoad: [Authv2Guard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [LoginService],
  exports: [RouterModule]
})

export class LoginRoutingModule {}
