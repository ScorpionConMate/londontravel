import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destiny.component';
import { DestinyRoutingModule } from './destinations.routing';
import { ContainerDestinyComponent } from './containerDestiny/containerDestiny.component';
import { HeaderComponent } from './header/header.component';
import { FormDestinyComponent } from './formDestiny/formDestiny.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowCodeComponent } from './showCode/showCode.component';
import { ShowPaxComponent } from './ShowPax/ShowPax.component';

@NgModule({
  imports: [CommonModule, DestinyRoutingModule, ReactiveFormsModule],
  declarations: [
    DestinationsComponent,
    ContainerDestinyComponent,
    HeaderComponent,
    FormDestinyComponent,
    ShowCodeComponent,
    ShowPaxComponent,
  ],
})
export class DestinationsModule {}
