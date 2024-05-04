import { Component, inject, Input, AfterViewChecked } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CitaMedica } from 'src/app/models/CitaMedica';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewChecked{
  Paciente$: Observable<CitaMedica[]>;
  firestore: Firestore = inject(Firestore);

  

  @Input() estado: string ='';

  ngOnInit(): void {
    
  }

  ngAfterViewChecked(): void {
   
  }


  constructor() { 
    const itemCollection = collection(this.firestore, 'CitaMedica');
    this.Paciente$ = collectionData(itemCollection) as Observable<CitaMedica[]>;
  }
}
