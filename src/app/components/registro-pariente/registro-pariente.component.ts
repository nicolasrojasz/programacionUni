import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-pariente',
  templateUrl: './registro-pariente.component.html',
  styleUrls: ['./registro-pariente.component.css'],
})
export class RegistroParienteComponent implements OnInit {
  cedula!: string;
  nombre!: string;
  telefono!: string;
  correo!: string;
  contrasena!: string;
  carril!: string;
  varCarrilSelect!: string;
  selectCarril: any = [];
  constructor(private services: CrudService) {}

  ngOnInit() {
    this.traerCarril();
  }

  registrar() {
    this.services
      .registrarPariente(
        this.cedula,
        this.nombre,
        this.telefono,
        this.correo,
        this.contrasena,
        JSON.parse(this.carril)
      )
      .subscribe(() => {
        this.showAlert();
      });
  }
  showAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  capturarCarril() {
    this.carril = this.varCarrilSelect;
  }
  traerCarril() {
    this.services.traerCarril().subscribe((reponse) => {
      this.selectCarril = reponse;
    });
  }
}
