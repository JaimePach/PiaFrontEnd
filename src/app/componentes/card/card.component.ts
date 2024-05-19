import { Component, inject, Input, AfterViewChecked,OnChanges ,SimpleChanges } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CitaMedica } from 'src/app/models/CitaMedica';
import { CitaMedicaService } from 'src/app/services/cita-medica.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { Usuario } from 'src/app/models/Usuario';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewChecked{
  firestore: Firestore = inject(Firestore);
  citas: CitaMedica[];
  usuarios: Usuario[];

  @Input() estado: string ='Canceladas';


  ngAfterViewChecked(): void {
   
  }


  constructor(private citaMedicaService:CitaMedicaService, private doctorService: DoctorService ) { 
 
   
  }

  ngOnInit(): void {
    this.cargarCitasMedicas();
    this.cargarPacientes();

  }

  async cargarCitasMedicas(){
    const { userId, esDoctor} = this.doctorService.ObtenerDatosUsuario();
   if(userId != null){
    this.citaMedicaService.getCitasMedicas(userId).subscribe(citas => {
      this.citas = citas;
    });
    }else {
      console.log('El ID de usuario es nulo. No se pueden cargar las citas médicas.');
    }
  }

  cargarPacientes(){
    this.doctorService.getInfoPaciente().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }
  
}
