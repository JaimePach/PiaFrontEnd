import { Component, Input, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { CitaMedica } from 'src/app/models/CitaMedica';
import { Usuario } from 'src/app/models/Usuario';
import { CitaMedicaService } from 'src/app/services/cita-medica.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  firestore: Firestore = inject(Firestore);
  citas: CitaMedica[];
  usuarios: Usuario[];
 


  
  @Input() estado: string = '';

   constructor(private citaMedicaService: CitaMedicaService,private doctorService: DoctorService) { 
    
   }

  ngOnInit(): void {

    this.cargarCitasMedicas();
    this.cargarPacientes();
  }

   async cargarCitasMedicas(){
    const { userId, esDoctor} =  this.doctorService.ObtenerDatosUsuario();
   if(userId != null && esDoctor == true){
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
