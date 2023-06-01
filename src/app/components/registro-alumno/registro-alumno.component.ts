import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css'],
})
export class RegistroAlumnoComponent implements OnInit {
  identificacion!: number;
  nombre!: string;
  prescolar = false;
  primaria = false;
  bachillerato = false;
  estado!: string;
  idPariente!: number;
  info!: any;
  arrayEst!: any;

  constructor(private services: CrudService) {}
  ngOnInit() {
    this.traerEstudiantes();
  }

  traerEstudiantes() {
    this.services.traerEstudiantes().subscribe((response) => {
      this.arrayEst = response;
      console.log(this.arrayEst);
    });
  }
  cambio() {
    this.prescolar = true;
    this.primaria = false;
    this.bachillerato = false;
  }
  cambioPri() {
    this.prescolar = false;
    this.primaria = true;
    this.bachillerato = false;
  }
  cambioBachi() {
    this.prescolar = false;
    this.primaria = false;
    this.bachillerato = true;
  }

  showAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  showAlertEliminar() {
    Swal.fire({
      icon: 'success',
      title: 'Registro Eliminado',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  registrarEstudiante() {
    if (this.prescolar === true) {
      if (localStorage.getItem('login')) {
        this.info = localStorage.getItem('login');
        this.info = JSON.parse(this.info);
        this.idPariente = this.info.cc;

        let est = parseInt(this.estado);
        this.services
          .registrarEstudiante(
            this.identificacion,
            this.nombre,
            1,
            est,
            this.idPariente
          )
          .subscribe((response) => {
            console.log(response);
            this.showAlert();
            this.ngOnInit();
          });
      }
    }

    if (this.primaria === true) {
      if (localStorage.getItem('login')) {
        this.info = localStorage.getItem('login');
        this.info = JSON.parse(this.info);
        this.idPariente = this.info.cc;

        let est = parseInt(this.estado);
        this.services
          .registrarEstudiante(
            this.identificacion,
            this.nombre,
            2,
            est,
            this.idPariente
          )
          .subscribe((response) => {
            console.log(response);
            this.showAlert();
            this.ngOnInit();
          });
      }
    }
    if (this.bachillerato === true) {
      if (localStorage.getItem('login')) {
        this.info = localStorage.getItem('login');
        this.info = JSON.parse(this.info);
        this.idPariente = this.info.cc;

        let est = parseInt(this.estado);
        this.services
          .registrarEstudiante(
            this.identificacion,
            this.nombre,
            3,
            est,
            this.idPariente
          )
          .subscribe((response) => {
            console.log(response);
            this.showAlert();
            this.ngOnInit();
          });
      }
    }
  }
  eliminarEstudiante(id: string) {
    this.services.eliminarEstu(parseInt(id)).subscribe((response) => {
      console.log(response);
      this.showAlertEliminar();
      this.ngOnInit();
    });
  }
}
