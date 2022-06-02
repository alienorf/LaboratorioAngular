import { Component, OnInit, ViewChild } from '@angular/core';
import { Socio } from 'src/app/formulario/socio';
import { FormControl, FormBuilder, FormGroup, Validators, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  	member: FormGroup = new FormGroup({});
	socios : Socio[] = [];
	indexEdited: number=-1;
	random: Array<number> = [];


	constructor(){
		this.member = new FormGroup({
			nombre : new FormControl("", [Validators.required, Validators.minLength(3)]),
			socioid : new FormControl(""),
			apellidos : new FormControl("", [Validators.required,  Validators.minLength(3)]),
			dni : new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
			telefono : new FormControl("", [Validators.required, Validators.minLength(3)]),
			sexo : new FormControl("", Validators.required)
		});
	}

	ngOnInit() : void{
		}

	onsubmit() {

		let socio = new Socio();

		socio.socioid = UUID.UUID();
		socio.nombre = this.member.value.nombre;
		socio.apellidos = this.member.value.apellidos;
		socio.socioid = UUID.UUID();
		socio.dni = this.member.value.dni;
		socio.telefono = this.member.value.telefono;
		socio.sexo = this.member.value.sexo;

		if (this.indexEdited==-1)
		this.socios.push(socio);
	 	else
		socio.socioid=this.member.value.socioid,
		this.socios[this.indexEdited]=socio;

	 this.indexEdited=-1;  
	 this.member.reset();

	}


	borraritem(i: any) : void {
        this.socios.splice(i, 1)
    }
	
	edititem(i:number,socio:Socio) : void {
			 this.member.patchValue(socio)
			 this.indexEdited=i; 
		}
	}


	
 //  Math.floor((Math.random() * 10000000) + 1)
