import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormHabitacionesComponent implements OnInit {

  id!: number;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  message(texto: string) {
    return texto;
  }

}
