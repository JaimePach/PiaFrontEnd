import { Component, inject, Input, AfterViewChecked,OnChanges ,SimpleChanges } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CitaMedica } from 'src/app/models/CitaMedica';
import { CitaMedicaService } from 'src/app/services/cita-medica.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewChecked{
  firestore: Firestore = inject(Firestore);
  citas: CitaMedica[];


  @Input() estado: string ='Canceladas';


  ngAfterViewChecked(): void {
   
  }


  constructor(private citaMedicaService:CitaMedicaService) { 
 
   
  }

  ngOnInit(): void {
    this.citaMedicaService.getCitasMedicas().subscribe(citas => {
      this.citas = citas;
    })
  }

  
}
