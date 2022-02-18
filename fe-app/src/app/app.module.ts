import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './home/container/container.component';
import { MainComponent } from './home/main/main.component';
import { FormComponent } from './home/form/form.component';
import { TitleComponent } from './habitaciones/title/title.component';
import { StepOneCnComponent } from './habitaciones/step-one-cn/step-one-cn.component';
import { AvailablesComponent } from './habitaciones/availables/availables.component';
import { StepTwoCnComponent } from './formulario/step-two-cn/step-two-cn.component';
import { TitleFormComponent } from './formulario/title/title.component';
import { CarrouselComponent } from './formulario/carrousel/carrousel.component';
import { FormHabitacionesComponent } from './formulario/form/form.component';
import { FinishTitleComponent } from './final/finish-title/finish-title.component';
import { StepThreeCnComponent } from './final/step-three-cn/step-three-cn.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainComponent,
    FormComponent,
    FormHabitacionesComponent,
    StepOneCnComponent,
    StepTwoCnComponent,
    StepThreeCnComponent,
    TitleComponent,
    TitleFormComponent,
    AvailablesComponent,
    CarrouselComponent,
    FinishTitleComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
