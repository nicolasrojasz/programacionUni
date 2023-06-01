import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.get<any>('http://localhost/backCrud-PHP-PR/login.php');
  }

  registrarEstudiante(
    idte: number,
    nombre: string,
    seccion: number,
    estado: number,
    idPariente: number
  ): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PR/guardarAlumno.php?Idte=${idte}&NombreAlum=${nombre}&Idseccion=${seccion}&estado=${estado}&Idpariente=${idPariente}`
    );
  }

  registrarPariente(
    cedula: string,
    nombre: string,
    telefono: string,
    correo: string,
    contrasena: string,
    carril: number
  ): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PR/guardarPariente.php?CC=${cedula}&Nombre=${nombre}&Telefono=${telefono}&Correo=${correo}&Contrasena=${contrasena}&Idcarril=${carril}`
    );
  }

  traerEstudiantes(): Observable<any> {
    return this.http.get(`http://localhost/backCrud-PHP-PR/obtenerAlumnos.php`);
  }
  traerEstudiantesInicio(): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PR/obtenerAlumnosInicio.php`
    );
  }

  eliminarEstu(id: number): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PR/eliminarEstudiante.php?Idte=${id}`
    );
  }
  traerCarril(): Observable<any> {
    return this.http.get(`http://localhost/backCrud-PHP-PR/traerCarril.php`);
  }
  actualizarCarril(CC: number, idCarril: number): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PR/actualizarCarril.php?CC=${CC}&Idcarril=${idCarril}`
    );
  }
  actualizarEstudiante(Idpariente: number, estado: number): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PR/actualizarEstudiante.php?Idpariente=${Idpariente}&estado=${estado}`
    );
  }
}
