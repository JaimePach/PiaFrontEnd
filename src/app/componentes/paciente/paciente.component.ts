import { Component, inject } from '@angular/core';
import { CitaMedica } from 'src/app/models/CitaMedica';
import { Usuario, IUsuario } from 'src/app/models/Usuario';
import { addDoc, Firestore, collection, collectionData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})

export class PacienteComponent {

  private firestore: Firestore = inject(Firestore);
  citas$: Observable<CitaMedica[]>;
  usersCollection: CollectionReference;
   
 paciente: Usuario = new Usuario();
 citaMedica: CitaMedica = new CitaMedica();

 
 
  
  constructor() {
    this.usersCollection = collection(this.firestore, 'CitaMedica');

   
  }

 

  AgregarCita( ){

    const nuevaCita = new CitaMedica(this.citaMedica.Fecha, this.citaMedica.Hora);

  });

  ValidarPacienteExiste(){

  }

    
  }

  

 
}

