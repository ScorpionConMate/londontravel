import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-availables',
  templateUrl: './availables.component.html',
  styleUrls: ['./availables.component.css'],
})
export class AvailablesComponent {
  @Input() roomsAvailable: any[] = [];

  groupOne: Array<string> = [
    'Juan Perez',
    'Peluchin Rodriguez',
    'Jonathan Dyallo',
    'Alan Rodriguez',
  ];
}
