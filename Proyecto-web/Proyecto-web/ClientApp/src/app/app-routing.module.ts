import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { LoginComponent } from './login/login.component';
import { RegistrarAdministradorComponent } from './registrar-administrador/registrar-administrador.component';
import { RegistrarPsicologoComponent } from './registrar-psicologo/registrar-psicologo.component';
import { ConsultaPacienteComponent } from './consulta-paciente/consulta-paciente.component';
import { RegistrasePacienteComponent } from './registrase-paciente/registrase-paciente.component';
import { ConsultarAdministradorComponent } from './consultar-administrador/consultar-administrador.component';
import { ConsultarPsicologoComponent } from './consultar-psicologo/consultar-psicologo.component';
import { DarDiagnosticoComponent } from './Psicologo/dar-diagnostico/dar-diagnostico.component';
import { MenuPsicologoComponent } from './Psicologo/menu-psicologo/menu-psicologo.component';
import { AgendarCitaComponent } from './Paciente/agendar-cita/agendar-cita.component';
import { ConsultarDiagnosticosComponent } from './Paciente/consultar-diagnosticos/consultar-diagnosticos.component';
import { MenuPacienteComponent } from './Paciente/menu-paciente/menu-paciente.component';
import { OfertarTalleresComponent } from './Psicologo/ofertar-talleres/ofertar-talleres.component';
import { ConsultarTalleresComponent } from './Psicologo/consultar-talleres/consultar-talleres.component';
import { RegistrarseTallerComponent } from './Paciente/registrarse-taller/registrarse-taller.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registrarse', component: RegistrasePacienteComponent},
  { path: 'menuadministrador', component: MenuAdministradorComponent,
  children:[
  {path: 'registrarpsicologo', component: RegistrarPsicologoComponent},
  { path: 'registraradministrador', component: RegistrarAdministradorComponent},
  { path: 'consultarpacientes', component: ConsultaPacienteComponent},
  { path: 'consultaradministrador', component: ConsultarAdministradorComponent},
  { path: 'consultarpsicologo', component: ConsultarPsicologoComponent},

  ]
  },
  { path: 'menuPsicologo', component:  MenuPsicologoComponent,
  children:[
  {path: 'DarDiagnosticoPsicologo', component: DarDiagnosticoComponent },
  { path: 'OfertarTalleresPsicologo', component: OfertarTalleresComponent},
  { path: 'consultarTalleresPsicologo', component: ConsultarTalleresComponent},

  ]
  },

  { path: 'menuPaciente', component:  MenuPacienteComponent,
  children:[
  {path: 'AgendarCitasPaciente', component: AgendarCitaComponent },
  { path: 'ConsultarDiagnosticosPaciente', component: ConsultarDiagnosticosComponent},
  { path: 'RegistrarseTallerPaciente', component: RegistrarseTallerComponent},
  
  ]
  },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
