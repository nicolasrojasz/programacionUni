import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario!: string;
  contrasena!: string;
  infoLogin = {
    usuario: '',
    contrasena: '',
  };
  constructor(private services: CrudService, private router: Router) {}

  iniciarSesion() {
    this.infoLogin = {
      usuario: this.usuario,
      contrasena: this.contrasena,
    };
    this.services.login().subscribe((response) => {
      let contrasena = response[0].Contrasena;
      let usuario = response[0].Correo;
      if (this.contrasena === contrasena && this.usuario === usuario) {
        localStorage.setItem('login', JSON.stringify(this.infoLogin));
        console.log('Se inicio sesion');
        this.router.navigate(['bienvenido']);
      } else {
        console.log('Usuario incorrecto');
      }
    });
  }
}
