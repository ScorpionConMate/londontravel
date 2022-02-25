import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './home/container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'reservas', loadChildren: () => import('./reservas/reservas.module').then(m => m.ReservasModule) },
  { path: 'staff', loadChildren: () => import('./staff/login.module').then(m => m.LoginModule) },
  { path: 'destinations', loadChildren: () => import('./destinations/destinations.module').then(m => m.DestinationsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
