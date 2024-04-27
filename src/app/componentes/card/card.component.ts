import { Component, inject, Input, AfterViewChecked } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/Doctor';
import { Paciente } from 'src/app/models/Paciente';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewChecked{
  Paciente$: Observable<Doctor[]>;
  firestore: Firestore = inject(Firestore);

   pacientes: Paciente[] = [
    { IdPaciente: 1, Nombre: 'Juan', ApellidoPaterno: 'Gómez', ApellidoMaterno: 'López', NombreUsuario: 'juanito123' },
    { IdPaciente: 2, Nombre: 'María', ApellidoPaterno: 'Martínez', ApellidoMaterno: 'García', NombreUsuario: 'maria99' },
    { IdPaciente: 3, Nombre: 'Pedro', ApellidoPaterno: 'Díaz', ApellidoMaterno: 'Pérez', NombreUsuario: 'pedrito21' },
  ];

  @Input() estado: string = '';

  ngOnInit(): void {
    
    //this.mostrarPacientes();
  }

  ngAfterViewChecked(): void {
   
  }

  
  mostrarPacientes() {
    this.pacientes.forEach(paciente => {
      console.log('ID: ' + paciente.IdPaciente);
      console.log('Nombre: ' + paciente.Nombre);
      console.log('Apellido Paterno: ' + paciente.ApellidoPaterno);
      console.log('Apellido Materno: ' + paciente.ApellidoMaterno);
      console.log('Nombre de Usuario: ' + paciente.NombreUsuario);
      console.log('-------------------------');
    });
  }



  constructor() { 
    const itemCollection = collection(this.firestore, 'app-medica');
    this.Paciente$ = collectionData(itemCollection) as Observable<Doctor[]>;
  }
}
