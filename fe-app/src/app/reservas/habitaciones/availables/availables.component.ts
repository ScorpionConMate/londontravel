import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availables',
  templateUrl: './availables.component.html',
  styleUrls: ['./availables.component.css'],
})
export class AvailablesComponent implements OnInit {
  groupOne: Array<string> = [
    'Juan Perez',
    'Peluchin Rodriguez',
    'Jonathan Dyallo',
    'Alan Rodriguez',
  ];

  roomsAvailable: Array<any> = [
    {
      id: 1,
      name: 'Habitación 1',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Habitación 2',
      isAvailable: false,
    },
    {
      id: 3,
      name: 'Habitación 3',
      isAvailable: true,
    },
    {
      id: 4,
      name: 'Habitación 4',
      isAvailable: true,
    },
    {
      id: 5,
      name: 'Habitación 5',
      isAvailable: true,
    },
    {
      id: 6,
      name: 'Habitación 6',
      isAvailable: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
