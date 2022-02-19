import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerDestinyComponent } from './containerDestiny/containerDestiny.component';

const routes: Routes = [
  { path: '', component: ContainerDestinyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})

export class DestinyRoutingModule {}
