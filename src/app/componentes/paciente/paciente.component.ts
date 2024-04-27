import { Component } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators} from '@angular/forms';
import {merge} from 'rxjs';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})

export class PacienteComponent {

  selected: Date | null | undefined;
  email = new FormControl('', [Validators.required, Validators.email]);  
  fecha: Date | undefined;
  hora: string | undefined;
  nombre: string | undefined;
  genero: string | undefined;
  
  constructor() {
   
  }

  AgregarCita(){
    
  }

 
}

