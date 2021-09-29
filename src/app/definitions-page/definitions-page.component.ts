import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-definitions-page',
  templateUrl: './definitions-page.component.html',
  styleUrls: ['./definitions-page.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class DefinitionsPageComponent implements OnInit {
  dialog: any;
  public modalTitle = '';
  public modalText = '';
  public modalAdditional  = '';
  public definitions = [
    { title: 'Code Review', key: "code_review"},
    { title: 'Niveles de acceso', key: "level_access"},
    { title: 'Patron de arquitectura de software', key: "software_arq"},
    { title: 'Patrones de diseño de software', key: "software_design"},
    { title: '¿Que es SOLID?', key: "solid"},
    { title: '¿Que es una clase?', key: "class"},
    { title: 'Herencia', key: "heritage"},
    { title: 'Interfaces', key: "interface"},
    { title: 'Polimorfismo', key: "polymorphism"},
    { title: 'API Web', key: "api"},
    { title: 'Pruebas unitarias', key: "unit_test"},
    { title: 'Manejo de errores', key: "mistakes"},
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
  public solidP = [
    {
      id: 1,
      name: 'Principio de Responsabilidad Única',
      definition: '',
    },
    {
      id: 2,
      name: 'Principio de Abierto/Cerrado',
      definition: '',
    },
    {
      id: 3,
      name: 'Principio de Sustitución de Liskov',
      definition: '',
    },
    {
      id: 4,
      name: 'Principio de Segregación de la Interfaz',
      definition: '',
    },
    {
      id: 5,
      name: 'Principio de Inversión de Dependencias',
      definition: '',
    },
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content: any, key: string, title: string) {
    this.modalText ='';
    this.modalTitle = title;
    switch(key){
      case "code_review":
        this.modalText="Es el proceso mediante el cual los distintos miembros de un equipo revisan en conjunto la implementación realizada por otro miembro para una historia de usuario, aportando ideas sobre mejoras en la implementación, posibles refactorizaciones, discusión de posibles bugs, optimizaciones, errores o mejoras de arquitectura, conveniencia o falta de cobertura de test, y todo tipo de discusiones sobre los cambios realizados para entregar una determinada funcionalidad."
      break; 
      case "level_access":
        this.modalText="Las reglas de control de acceso estáticas tienen una jerarquía de prioridad. Cuando un agente de sistema de directorio recibe una solicitud, el agente de sistema de directorio comprueba si acepta la solicitud utilizando la regla de control de acceso aplicable con la prioridad más alta e ignora las otras reglas de control de acceso. Los niveles de prioridad son los siguientes:"
      break; 
      case "software_arq":
        this.modalText="Es una solución general y reutilizable a un problema común en la arquitectura de software dentro de un contexto dado. Los patrones arquitectónicos son similares al patrón de diseño de software pero tienen un alcance más amplio."
      break; 
      case "software_design":
        this.modalText = "Los patrones de diseño o design patterns, son una solución general, reutilizable y aplicable a diferentes problemas de diseño de software. Se trata de plantillas que identifican problemas en el sistema y proporcionan soluciones apropiadas a problemas generales a los que se han enfrentado los desarrolladores durante un largo periodo de tiempo, a través de prueba y error"
      break;
      case "solid":
        this.modalText = "Es un acronimo que define 5 principios de diseño de aplicaciones de software denominados principios SOLID, estos son:"
      break;
      case "class":
        this.modalText = "Una clase es una plantilla para la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para representar entidades o conceptos. Cada clase es un modelo que define un conjunto de variables (el estado), y métodos apropiados para operar con dichos datos (el comportamiento). Cada objeto creado a partir de la clase se denomina instancia de la clase."
        this.modalAdditional = "Las clases son un pilar fundamental de la programación orientada a objetos. Permiten abstraer los datos y sus operaciones asociadas al modo de una caja negra. Los lenguajes de programación que soportan clases difieren sutilmente en su soporte para diversas características relacionadas con clases. La mayoría soportan diversas formas de herencia."      
      break;
      case "heritage":
        this.modalText = "La herencia permite que se puedan definir nuevas clases basadas de unas ya existentes a fin de reutilizar el código, generando así una jerarquía de clases dentro de una aplicación. Si una clase deriva de otra, esta hereda sus atributos y métodos y puede añadir nuevos atributos, métodos o redefinir los heredados."  
      break;
      case "interface":
        this.modalText = "Una interfaz es un conjunto de métodos abstractos y de constantes cuya funcionalidad es la de determinar el funcionamiento de una clase, es decir, funciona como un molde o como una plantilla. Al ser sus métodos abstractos estos no tiene funcionalidad alguna, sólo se definen su tipo, argumento y tipo de retorno."  
      break;
      case "polymorphism":
        this.modalText = "El polimorfismo es la capacidad que tienen los objetos de una clase en ofrecer respuesta distinta e independiente en función de los parámetros (diferentes implementaciones) utilizados durante su invocación. Dicho de otro modo el objeto como entidad puede contener valores de diferentes tipos durante la ejecución del programa."  
      break;
      case "api":
        this.modalText = "Una API es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones. API significa interfaz de programación de aplicaciones."  
        this.modalAdditional =  "Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados. Esto simplifica el desarrollo de las aplicaciones y permite ahorrar tiempo y dinero. Las API le otorgan flexibilidad; simplifican el diseño, la administración y el uso de las aplicaciones, y proporcionan oportunidades de innovación, lo cual es ideal al momento de diseñar herramientas y productos nuevos (o de gestionar los actuales). Existen herramientas para probar las web APIs como Insomnia y Postman "  
      break;
      case "unit_test":
        this.modalText = "Las pruebas unitarias o unit testing son una forma de comprobar que un fragmento de código funciona correctamente. Es un procedimiento más de los que se llevan a cabo dentro de una metodología ágil de trabajo."  
      break;
      case "mistakes":
        this.modalText = "En los entornos de programación más recientes se ha desarrollado una forma alternativa de manejar los errores, conocida como manejo de excepciones, la cual funciona generando una excepción tan pronto aparece un error. El sistema fuerza un salto hacia el bloque de excepciones más cercano del código en el cual se toman las acciones apropiadas tendientes a solucionar o alertar acerca del error producido. El sistema provee un 'manejador' estándar por defecto que toma todas las excepciones y que muestra los mensajes de error, deteniendo la ejecución del programa."  
      break;
    }
    this.modalService.open(content);
  }

  ngOnInit(): void {}
}
