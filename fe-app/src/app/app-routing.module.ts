import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepThreeCnComponent } from './final/step-three-cn/step-three-cn.component';
import { StepTwoCnComponent } from './formulario/step-two-cn/step-two-cn.component';
import { StepOneCnComponent } from './habitaciones/step-one-cn/step-one-cn.component';
import { ContainerComponent } from './home/container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'habitaciones', component: StepOneCnComponent },
  { path: ':id', component: StepTwoCnComponent },
  { path: ':id/finish', component: StepThreeCnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
