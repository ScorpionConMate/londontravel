import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormHabitacionesComponent implements OnInit {

  items = [1,2,3,4]

  form = new FormGroup({
    nombre: new FormControl(''),
    instagram: new FormControl(''),
  })

  id!: number;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
