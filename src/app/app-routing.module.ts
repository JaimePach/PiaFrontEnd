import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './componentes/doctor/doctor.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { ListComponent } from './componentes/list/list.component';
import { CardComponent } from './componentes/card/card.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: 'Doctor', component: DoctorComponent},
  {path: 'Paciente', component: PacienteComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Lista', component: ListComponent},
  {path: 'Card', component: CardComponent},
  {path: '', redirectTo: '/Doctor', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
