import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string): Observable<any> {
    return this.http.get<any>('');
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

  traerCarril(): Observable<any> {
    return this.http.get(`http://localhost/backCrud-PHP-PR/traerCarril.php`);
  }
}
