import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './home/container/container.component';
import { MainComponent } from './home/main/main.component';
import { FormComponent } from './home/form/form.component';
import { LoginModule } from './staff/login.module';
import { ReservasModule } from './reservas/reservas.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DestinationsModule } from './destinations/destinations.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReservasModule,
    ReactiveFormsModule,
    DestinationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
