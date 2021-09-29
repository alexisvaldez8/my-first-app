import { Component, OnInit } from '@angular/core';
import { AutosController } from './autosController';
import { OperationsClass } from './operationsClass';

interface Auto{
  marca: String,
  subMarca: String,
  modelo: Number,
  tipo: String
}

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})

export class ExamplesComponent extends OperationsClass implements OnInit {

  
public vento: Auto={
  marca: "Volskwagen",
  subMarca: "Vento",
  modelo: 2021,
  tipo: "sedan",
}
num1: any;
num2: any;
getMatricula(): string{

  return "";
}

constructor(public autosController : AutosController) {
  super();
  //console.log(this.suma(1, 10));
  
 }
  ngOnInit(): void {
    this.autosController.putInterface(this);
  }

}
