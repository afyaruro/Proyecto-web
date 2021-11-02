import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { RegistrarPsicologoComponent } from './registrar-psicologo/registrar-psicologo.component';
import { RegistrarAdministradorComponent } from './registrar-administrador/registrar-administrador.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsultaPacienteComponent } from './consulta-paciente/consulta-paciente.component';
import { RegistrasePacienteComponent } from './registrase-paciente/registrase-paciente.component';
import { ConsultarAdministradorComponent } from './consultar-administrador/consultar-administrador.component';
import { ConsultarPsicologoComponent } from './consultar-psicologo/consultar-psicologo.component';
import { DarDiagnosticoComponent } from './Psicologo/dar-diagnostico/dar-diagnostico.component';
import { AgendarCitaComponent } from './Paciente/agendar-cita/agendar-cita.component';
import { ConsultarDiagnosticosComponent } from './Paciente/consultar-diagnosticos/consultar-diagnosticos.component';
import { MenuPacienteComponent } from './Paciente/menu-paciente/menu-paciente.component';
import { MenuPsicologoComponent } from './Psicologo/menu-psicologo/menu-psicologo.component';
import { OfertarTalleresComponent } from './Psicologo/ofertar-talleres/ofertar-talleres.component';
import { RegistrarseTallerComponent } from './Paciente/registrarse-taller/registrarse-taller.component';
import { ConsultarTalleresComponent } from './Psicologo/consultar-talleres/consultar-talleres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuAdministradorComponent,
    RegistrarPsicologoComponent,
    RegistrarAdministradorComponent,
    ConsultaPacienteComponent,
    RegistrasePacienteComponent,
    ConsultarAdministradorComponent,
    ConsultarPsicologoComponent,
    DarDiagnosticoComponent,
    AgendarCitaComponent,
    ConsultarDiagnosticosComponent,
    MenuPacienteComponent,
    MenuPsicologoComponent,
    OfertarTalleresComponent,
    RegistrarseTallerComponent,
    ConsultarTalleresComponent,
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
