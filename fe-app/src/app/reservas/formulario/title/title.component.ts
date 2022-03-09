import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-form',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleFormComponent implements OnInit {
  @Input() room: any;
  roomData: any;
  constructor() {}



  ngOnInit() {

  }

  message(texto: string) {
    return texto;
  }
}
