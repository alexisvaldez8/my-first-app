import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class HomePageComponent implements OnInit {
  dialog: any;
  public modalTitle = '';
  public modalText = '';
  public definitions = [
    { title: 'Code Review'},
    { title: 'Niveles de acceso'},
    { title: 'Patron de arquitectura de software',},
    { title: 'Patrones de diseno de software'},
  ];

  public accessLevels = [
    {
      id: 1,
      name: 'Nivel de acceso de superusuario',
      definition: '',
    },
    {
      id: 2,
      name: 'Nivel de acceso de usuario administrativo',
      definition: '',
    },
    {
      id: 3,
      name: 'Nivel de acceso de elementos protegidos',
      definition: '',
    },
    {
      id: 4,
      name: 'Nivel de acceso de usuario registrado',
      definition: '',
    },
    {
      id: 5,
      name: 'Niveles de acceso de usuario público',
      definition: '',
    },
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content: any, title: string) {
    this.modalTitle = title;
    switch(title){
      case "Code Review":
        this.modalText="Es el proceso mediante el cual los distintos miembros de un equipo revisan en conjunto la implementación realizada por otro miembro para una historia de usuario, aportando ideas sobre mejoras en la implementación, posibles refactorizaciones, discusión de posibles bugs, optimizaciones, errores o mejoras de arquitectura, conveniencia o falta de cobertura de test, y todo tipo de discusiones sobre los cambios realizados para entregar una determinada funcionalidad."
      break; 
      case "Niveles de acceso":
        this.modalText="Las reglas de control de acceso estáticas tienen una jerarquía de prioridad. Cuando un agente de sistema de directorio recibe una solicitud, el agente de sistema de directorio comprueba si acepta la solicitud utilizando la regla de control de acceso aplicable con la prioridad más alta e ignora las otras reglas de control de acceso."
      break; 
      case "Patron de arquitectura de software":
        this.modalText="Es una solución general y reutilizable a un problema común en la arquitectura de software dentro de un contexto dado. Los patrones arquitectónicos son similares al patrón de diseño de software pero tienen un alcance más amplio."
      break;  
    }
    this.modalService.open(content);
  }

  ngOnInit(): void {}
}
