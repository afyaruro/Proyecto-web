import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  tipousuario = "Tipo de usuario";

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  IngresarAdministrador(){
    this.router.navigate(["/menuadministrador"]);
  }

  IngresarPsicologo(){
    this.router.navigate(["/menuPsicologo"]);
  }

  IngresarPaciente(){
    this.router.navigate(["/menuPaciente"]);
  }

  Ingresar(){
    
    if (this.tipousuario === "Tipo de usuario"){
      alert("Seleccione un Usuario..");
   }
    
    else if (this.tipousuario === "1"){
      this.IngresarPaciente();
    }

    else if (this.tipousuario === "2"){
      this.IngresarAdministrador();
    }

    else if (this.tipousuario === "3"){
      this.IngresarPsicologo();
    }
  }
}
