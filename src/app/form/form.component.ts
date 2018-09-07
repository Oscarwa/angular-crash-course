import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  model = {

  }
  submittedModel = {}

  categories = [
    "Despensa",
    "Linea blanca",
    "Comida",
    "Higiene",
    "Abarrotes",
  ]

  submitted = false;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.submittedModel = this.model;
  }

}
