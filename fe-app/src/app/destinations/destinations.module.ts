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
import { PaxListComponent } from './pax-list/pax-list.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, DestinyRoutingModule, ReactiveFormsModule, MatDialogModule],
  declarations: [
    DestinationsComponent,
    ContainerDestinyComponent,
    HeaderComponent,
    FormDestinyComponent,
    ShowCodeComponent,
    ShowPaxComponent,
    PaxListComponent,
  ],
  entryComponents: [PaxListComponent]
})
export class DestinationsModule {}
