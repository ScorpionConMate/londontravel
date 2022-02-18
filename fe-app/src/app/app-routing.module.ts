import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './home/container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'reservas', loadChildren: () => import('./reservas/reservas.module').then(m => m.ReservasModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
