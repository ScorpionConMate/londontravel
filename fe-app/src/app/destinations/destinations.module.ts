import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destiny.component';
import { DestinyRoutingModule } from './destinations.routing';
import { ContainerDestinyComponent } from './containerDestiny/containerDestiny.component';
import { HeaderComponent } from './header/header.component';
import { FormDestinyComponent } from './formDestiny/formDestiny.component';

@NgModule({
  imports: [CommonModule, DestinyRoutingModule],
  declarations: [
    DestinationsComponent,
    ContainerDestinyComponent,
    HeaderComponent,
    FormDestinyComponent,
  ],
})
export class DestinationsModule {}
