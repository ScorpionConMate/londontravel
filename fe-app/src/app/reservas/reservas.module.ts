import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas.component';
import { AvailablesComponent } from './habitaciones/availables/availables.component';
import { StepOneCnComponent } from './habitaciones/step-one-cn/step-one-cn.component';
import { TitleComponent } from './habitaciones/title/title.component';
import { ReservasRoutingModule } from './reservas.routing';
import { FinishTitleComponent } from './final/finish-title/finish-title.component';
import { StepThreeCnComponent } from './final/step-three-cn/step-three-cn.component';
import { CarrouselComponent } from './formulario/carrousel/carrousel.component';
import { FormHabitacionesComponent } from './formulario/form/form.component';
import { StepTwoCnComponent } from './formulario/step-two-cn/step-two-cn.component';
import { TitleFormComponent } from './formulario/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../home/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ReservasRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  declarations: [
    ReservasComponent,
    AvailablesComponent,
    StepOneCnComponent,
    TitleComponent,
    FormHabitacionesComponent,
    StepTwoCnComponent,
    StepThreeCnComponent,
    TitleFormComponent,
    CarrouselComponent,
    FinishTitleComponent,
  ],
})
export class ReservasModule {}
