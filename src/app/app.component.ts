import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-medica';

  doctor$: Observable<Doctor[]>;
 firestore: Firestore = inject(Firestore);

  constructor() { 
    const itemCollection = collection(this.firestore, 'app-medica');
    this.doctor$ = collectionData(itemCollection) as Observable<Doctor[]>;
  }
 
}
