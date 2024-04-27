import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  doctor$: Observable<Doctor[]>;
  firestore: Firestore = inject(Firestore);


  constructor() { 
    const itemCollection = collection(this.firestore, 'Doctor');
    this.doctor$ = collectionData(itemCollection) as Observable<Doctor[]>;
  }
}
