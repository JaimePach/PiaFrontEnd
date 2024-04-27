import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  Paciente$: Observable<Doctor[]>;
  firestore: Firestore = inject(Firestore);


  constructor() { 
    const itemCollection = collection(this.firestore, 'app-medica');
    this.Paciente$ = collectionData(itemCollection) as Observable<Doctor[]>;
  }

  
}
