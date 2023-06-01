import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario!: string;
  contrasena!: string;
  infoLogin = {
    cc: '',
    usuario: '',
    contrasena: '',
  };
  constructor(private services: CrudService, private router: Router) {}
  showAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Revisa los datos ingresados',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  iniciarSesion() {
    this.services.login().subscribe((response) => {
      let cc = response[0].CC;
      let contrasena = response[0].Contrasena;
      let usuario = response[0].Correo;
      if (this.contrasena === contrasena && this.usuario === usuario) {
        this.infoLogin = {
          cc: cc,
          usuario: this.usuario,
          contrasena: this.contrasena,
        };
        localStorage.setItem('login', JSON.stringify(this.infoLogin));
        console.log('Se inicio sesion');
        this.router.navigate(['bienvenido']);
      } else {
        console.log('Usuario incorrecto');
        this.showAlert();
      }
    });
  }
}
