import { Component, OnInit } from '@angular/core';
import { AutosController } from './autosController';
import { OperationsClass } from './operationsClass';
import { UsersService } from '../users.service';

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
public coches: Auto[] = [];
public error = false;
public users: any;  
public vento: Auto={
  marca: "Volskwagen",
  subMarca: "Vento",
  modelo: 2021,
  tipo: "sedan",
}
public polo = {
  tamano: "familiar",
  numeroLlantas: 2
}
num1: any;
num2: any;
getMatricula(): string{

  return "";
}

constructor(public autosController : AutosController, public userService: UsersService) {
  super();
  //console.log(this.suma(1, 10));
  
 }
 getUsers() {
  this.userService.getUsers().subscribe(users => {
    this.users = users;
    this.error = false;
  });
}

getUsersWithError() {
  this.userService.getUsersWithError().subscribe(
    users => {
      this.users = users;
      this.error = false;
    },
    () => {
      this.error = true;
      this.users = [];
    }
  );
}

addAuto(){
  this.coches.push(this.vento);
  console.log(this.coches);
}
  ngOnInit(): void {
    this.autosController.putInterface(this);
  }

}
