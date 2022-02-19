import { Component, OnInit } from '@angular/core';
import getCurrentYearAndPlus from 'src/utils/date';

@Component({
  selector: 'app-formDestiny',
  templateUrl: './formDestiny.component.html',
  styleUrls: ['./formDestiny.component.scss']
})
export class FormDestinyComponent implements OnInit {

  date: number[] = getCurrentYearAndPlus();

  constructor() { }

  ngOnInit() {}

}
