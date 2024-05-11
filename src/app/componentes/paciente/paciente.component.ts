import { Component, inject } from '@angular/core';
import { CitaMedica } from 'src/app/models/CitaMedica';
import { Usuario, IUsuario } from 'src/app/models/Usuario';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})

export class PacienteComponent {

  formulario: FormGroup;

   
 paciente: Usuario = new Usuario();
 citaMedica: CitaMedica = new CitaMedica();

 horas: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

 minutos: string[] = Array.from({ length: 60 }, (_, i) => i < 10 ? '0' + i : '' + i);
 
  
  constructor() {

   
  }

 

  AgregarCita( ){

    //const nuevaCita = new CitaMedica(this.citaMedica.Fecha, this.citaMedica.Hora);

  }

  ValidarPacienteExiste(){

  }

    
  }

  

 


