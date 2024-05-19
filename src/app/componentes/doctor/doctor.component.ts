import { Component, Output } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {



  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  @Output() estado: string = 'Todas';


  constructor( private authService: AuthService,
    private router: Router) { 
  }

 

  vistaActiva: string = 'grid';

  cambiarVista(vista : string) {
    this.vistaActiva= vista;
  }

  cambiaEstado():void {
    console.log("----------- tab activo: " + this.tabGroup.selectedIndex + " ------------");
    if(this.tabGroup.selectedIndex === 0) {
      this.estado = 'Todas';
    }
    if(this.tabGroup.selectedIndex === 1) {
      this.estado = 'Confirmadas';
    }
    if(this.tabGroup.selectedIndex === 2) {
      this.estado = 'Por Confirmar';
    }
    if(this.tabGroup.selectedIndex === 3) {
      this.estado = 'Canceladas';
    }
    if(this.tabGroup.selectedIndex === 4) {
      this.estado = 'Completadas';
    }
  }

  onClick() {
   this.authService.logout()
      .then(() => {
        this.router.navigate(['/Login']);
      })
      .catch(error => console.log(error));
    }

}
