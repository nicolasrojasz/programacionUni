import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  info!: any;
  carril1 = false;
  carril2 = false;
  carril3 = false;
  halitar = true;
  arrayEst!: any;
  constructor(private services: CrudService) {}
  ngOnInit() {
    this.traerEstudiantes();
  }

  cambio() {
    this.carril1 = true;
    this.carril2 = false;
    this.carril3 = false;
  }
  cambioCa2() {
    this.carril1 = false;
    this.carril2 = true;
    this.carril3 = false;
  }
  cambioCa3() {
    this.carril1 = false;
    this.carril2 = false;
    this.carril3 = true;
  }
  showAlert() {
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  traerEstudiantes() {
    this.services.traerEstudiantesInicio().subscribe((response) => {
      this.arrayEst = response;
      console.log(this.arrayEst);
    });
  }

  actualizar() {
    if (this.carril1 === true) {
      if (localStorage.getItem('login')) {
        this.info = localStorage.getItem('login');
        this.info = JSON.parse(this.info);
        this.services
          .actualizarCarril(parseInt(this.info.cc), 1)
          .subscribe((response) => {
            console.log(response);
            this.actualizarEstudiante();
            this.showAlert();
            this.ngOnInit();
            this.halitar = false;
          });
      }
    }
    if (this.carril2 === true) {
      if (localStorage.getItem('login')) {
        this.info = localStorage.getItem('login');
        this.info = JSON.parse(this.info);
        this.services
          .actualizarCarril(parseInt(this.info.cc), 2)
          .subscribe((response) => {
            console.log(response);
            this.actualizarEstudiante();
            this.showAlert();
            this.ngOnInit();
            this.halitar = false;
          });
      }
    }
    if (this.carril3 === true) {
      if (localStorage.getItem('login')) {
        this.info = localStorage.getItem('login');
        this.info = JSON.parse(this.info);
        this.services
          .actualizarCarril(parseInt(this.info.cc), 3)
          .subscribe((response) => {
            console.log(response);
            this.actualizarEstudiante();
            this.showAlert();
            this.ngOnInit();
            this.halitar = false;
          });
      }
    }
  }
  actualizarEstudiante() {
    if (localStorage.getItem('login')) {
      this.info = localStorage.getItem('login');
      this.info = JSON.parse(this.info);
      this.services
        .actualizarEstudiante(parseInt(this.info.cc), 1)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
