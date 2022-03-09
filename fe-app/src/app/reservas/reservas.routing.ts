import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepThreeCnComponent } from './final/step-three-cn/step-three-cn.component';
import { StepTwoCnComponent } from './formulario/step-two-cn/step-two-cn.component';
import { StepOneCnComponent } from './habitaciones/step-one-cn/step-one-cn.component';

const routes: Routes = [
  { path: ':id', component: StepOneCnComponent },
  { path: ':id/2', component: StepTwoCnComponent },
  { path: ':id/finish', component: StepThreeCnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasRoutingModule {}
