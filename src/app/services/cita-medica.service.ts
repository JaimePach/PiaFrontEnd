import { Injectable } from '@angular/core';
import { CitaMedica, ICitaMedica } from '../models/CitaMedica';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaMedicaService {

  citaMedica: ICitaMedica = new CitaMedica();

  constructor(private firestore:Firestore) { }

  getCitasDelDoctor(){
   
    

  }
  
  addCitaMedica(citamedica: CitaMedica) {
    const referencia = collection(this.firestore, 'CitaMedica');
    return addDoc(referencia, citamedica);
  }

  getCitasMedicas(): Observable<CitaMedica[]> {
    const referencia = collection(this.firestore, 'CitaMedica');
    return collectionData(referencia) as Observable<CitaMedica[]>;
  }
}
