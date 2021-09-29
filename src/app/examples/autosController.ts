import { Injectable } from "@angular/core";
import { AutosInterface } from "./autosInterface";

@Injectable({
    providedIn: 'root'
  })

export class AutosController {
    public autosInterface : AutosInterface | undefined
    constructor(){}
    putInterface(component: any){
        this.autosInterface = component as AutosInterface;
    }
    getMatricula(){
        this.autosInterface?.getMatriculas();
    }
}