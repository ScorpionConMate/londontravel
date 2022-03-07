import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Authv2Guard } from '../helpers/authv2.guard';
import { ContainerDestinyComponent } from './containerDestiny/containerDestiny.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerDestinyComponent,
    canLoad: [],
    data: { title: 'Destinos', showCode: false },
  },
  {
    path: 'getCode',
    component: ContainerDestinyComponent,
    canLoad: [Authv2Guard],
    data: {
      title: 'Entrega de código',
      showCode: true,
    },
  },
  {
    path: 'showPax',
    component: ContainerDestinyComponent,
    canLoad: [Authv2Guard],
    data: {
      title: 'Lista de pasajeros',
      showCode: false,
      showPax: true,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class DestinyRoutingModule {}
