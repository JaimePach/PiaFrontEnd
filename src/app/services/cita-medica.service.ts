import { Injectable } from '@angular/core';
import { CitaMedica, ICitaMedica } from '../models/CitaMedica';
import { Firestore, addDoc, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaMedicaService {

  citaMedica: ICitaMedica = new CitaMedica();

  constructor(private firestore:Firestore ) { }

 
  addCitaMedica(citamedica: CitaMedica) {
    const referencia = collection(this.firestore, 'CitaMedica');
    return addDoc(referencia, citamedica);
  }

  getCitasMedicas(idDoctor: number): Observable<CitaMedica[]> {
    const referencia = query(collection(this.firestore, 'CitaMedica'), where('DoctorId', '==',idDoctor));
    return collectionData(referencia) as Observable<CitaMedica[]>;
  }
}
