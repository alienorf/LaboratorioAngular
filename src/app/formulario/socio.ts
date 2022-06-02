import { UUID } from 'angular2-uuid';


export class Socio {
	[x: string]: any;
    nombre : string;
    apellidos: string;
    socioid: string;
    dni: string;
    telefono: string;
    sexo: string;
  
    constructor(){
      this.nombre = "";
      this.apellidos = "";
      this.socioid = "";
      this.dni = "";
      this.telefono = "";
      this.sexo = "";
    }
  }