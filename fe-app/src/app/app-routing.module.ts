import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Authv2Guard } from './helpers/authv2.guard';
import { ContainerComponent } from './home/container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent,
 },
  {
    path: 'reservas',
    loadChildren: () =>
      import('./reservas/reservas.module').then((m) => m.ReservasModule),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/login.module').then((m) => m.LoginModule),

  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
