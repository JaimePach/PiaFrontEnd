import { Component, Input, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CitaMedica } from 'src/app/models/CitaMedica';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  Paciente$: Observable<CitaMedica[]>;
  firestore: Firestore = inject(Firestore);

  
  @Input() estado: string = '';

  ngOnInit(): void {
    
  }


  constructor() { 
    const itemCollection = collection(this.firestore, 'CitaMedica');
    this.Paciente$ = collectionData(itemCollection) as Observable<CitaMedica[]>;
  }

  
}
