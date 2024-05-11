import { Component, Input, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { CitaMedica } from 'src/app/models/CitaMedica';
import { CitaMedicaService } from 'src/app/services/cita-medica.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  firestore: Firestore = inject(Firestore);
  citas: CitaMedica[];


  
  @Input() estado: string = '';

   constructor(private citaMedicaService: CitaMedicaService) { 
    
   }

  ngOnInit(): void {
    this.citaMedicaService.getCitasMedicas().subscribe(citas => {
      this.citas = citas;
    })
  }



  

  
}
