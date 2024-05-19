import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';
import { CitaMedica, ICitaMedica } from '../models/CitaMedica';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  userId: number;
  esDoctor: boolean;
  citaMedica: ICitaMedica = new CitaMedica();

  constructor(private firestore:Firestore, private authService: AuthService, private router: Router) { }

  async ConocerDatosUsuario() {
    try {
        const correo = this.authService.ObtenerCorreoActual();
        const usuario = query(collection(this.firestore, 'Usuarios'), where('correo', '==', correo));
        const usuarioSnapshot = await getDocs(usuario);

        if (usuarioSnapshot.empty) {
            console.log('No se encontraron documentos para el usuario actual.');
            return { idUsuario: null, isDoctor: null };
        }

        let idUsuario: number | null = null;
        let isDoctor: boolean | null = null;

        usuarioSnapshot.forEach(doc => {
            const data = doc.data();
            idUsuario = data["IdUsuario"]; 
            isDoctor = data["EsDoctor"];
        });

        return { idUsuario, isDoctor };
    } catch (error) {
        console.error('Error al obtener datos de usuario:', error);
        return { idUsuario: null, isDoctor: null };
    }
}
async Navegar(){
  const { idUsuario, isDoctor} = await this.ConocerDatosUsuario();
  if(idUsuario == null || isDoctor == null){
    console.log('No Existe el Usuario');
  } else{
    this.GuardarDatosUsuario(idUsuario, isDoctor);

  }
    if(isDoctor){
   this.router.navigate(['/Doctor']);
  }else{
    this.router.navigate(['/Paciente']);
  }

}

GuardarDatosUsuario(idUsuario: number, isDoctor: boolean){
  this.userId = idUsuario;
  this.esDoctor = isDoctor;

}

ObtenerDatosUsuario(){
  return {
    userId:this.userId,
    esDoctor: this.esDoctor
};  }

  async AsignarDoctor(){
     
    const doctor = query(collection(this.firestore, 'Usuarios'), where('EsDoctor', '==', true));
    const doctorSnapshot = await getDocs(doctor);

    if (!doctorSnapshot.empty) {
      const doctors = doctorSnapshot.docs;

      const randomIndex = Math.floor(Math.random() * doctors.length);
      const randomDoctorDoc = doctors[randomIndex];
      const datosDoctor = randomDoctorDoc.data();
      const IdDoctor = datosDoctor["IdUsuario"];
      console.log('Doctor aleatorio encontrado:', IdDoctor);
      return IdDoctor;

    } else {
      console.log('No se encontraron doctores.');
      return;
    }

  }
  getInfoPaciente(): Observable<Usuario[]> {
    const referencia = collection(this.firestore, 'Usuarios');
    return collectionData(referencia) as Observable<Usuario[]>;
  }

  }



  

