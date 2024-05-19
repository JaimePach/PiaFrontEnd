import { Component } from '@angular/core';
import { CitaMedica } from 'src/app/models/CitaMedica';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaMedicaService } from 'src/app/services/cita-medica.service';
import { DoctorService } from 'src/app/services/doctor.service';




@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})

export class PacienteComponent {

  formCitaMedica: FormGroup;
   
 citaMedica: CitaMedica = new CitaMedica();

 horas: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

 minutos: string[] = Array.from({ length: 60 }, (_, i) => i < 10 ? '0' + i : '' + i);
 
  
  constructor(private fb: FormBuilder,
     private citaMedicaService: CitaMedicaService,
     private doctorService: DoctorService) {

   
  }
  ngOnInit(): void {
    this.formCitaMedica = this.fb.group({
      Fecha: ['', Validators.required],
      Hora: ['', Validators.required],
      Minutos: ['', Validators.required],
      Periodo: ['', Validators.required],
      correo: ['', Validators.required],
      Nombre: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }


 

  async AgregarCita(): Promise<void> {
    try {
      const { userId, esDoctor } = await this.doctorService.ObtenerDatosUsuario();
  
      if (!userId) {
        console.log('El Usuario no Existe');
        return; 
      } else if (esDoctor) {
        console.log('El usuario no es un paciente');
        return; 
      }
  
      const IdDoctor = await this.doctorService.AsignarDoctor();
      const randomIndex = Math.floor(Math.random() * 10000);
  
      const nuevaCitaMedica: CitaMedica = {
        IdCitaMedica: randomIndex,
        Estado: "Por Confirmar",
        Fecha: this.formCitaMedica.get('Fecha')?.value,
        Hora: this.formCitaMedica.get('Hora')?.value,
        Minutos: this.formCitaMedica.get('Minutos')?.value,
        Periodo: this.formCitaMedica.get('Periodo')?.value,
        DoctorId: IdDoctor,
        PacienteId: userId
      };
  
      const response = await this.citaMedicaService.addCitaMedica(nuevaCitaMedica);
      console.log(response);
    } catch (error) {
      console.error('Error al agregar la cita médica:', error);
    }
  }
  



  

    
  }

  

 


