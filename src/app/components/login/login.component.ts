import { Component } from '@angular/core';
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
  constructor(private services: CrudService) {}

  iniciarSesion() {
    this.infoLogin = {
      usuario: this.usuario,
      contrasena: this.contrasena,
    };
    this.services.login(this.usuario, this.contrasena).subscribe((response) => {
      if (response === 1) {
        localStorage.setItem('login', JSON.stringify(this.infoLogin));
        console.log('Se inicio sesion');
      } else {
        console.log(response);
      }
    });
  }
}
