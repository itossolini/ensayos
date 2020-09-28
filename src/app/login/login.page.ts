import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  private correo: string = '';
  private contrasenia: string = '';
  private rcontrasenia: string =''; 
  

  constructor(private router: Router) { }

  public guardar(): void {
    if (this.correo == '') {
      alert("Ingrese el correo por favor"); } else { 
    
    if (this.contrasenia == '' && this.rcontrasenia == '') {
      alert("Las contraseñas ingresadas no coinciden o no ha ingresado un valor"); 
    } else { 
      if (this.contrasenia == this.rcontrasenia) {
        this.router.navigate(['/listacampos']);
      } else {
        alert("Las contraseñas ingresadas no coinciden o no ha ingresado un valor"); 
      }
      
    }            
    }
  }
}

