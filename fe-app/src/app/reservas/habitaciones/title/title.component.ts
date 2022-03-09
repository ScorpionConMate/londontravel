import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input() infoSchool: any;
  constructor() {
  }

  ngOnInit() {}

  transformTurn(value: any): string {
    const HourTurn = {
      morning: 'Mañana',
      afternoon: 'Tarde',
      night: 'Noche',
    };

    //@ts-ignore
    return HourTurn[value] ?? '';
  }
}
