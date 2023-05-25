import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroParienteComponent } from './components/registro-pariente/registro-pariente.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registroPariente', component: RegistroParienteComponent },
  { path: 'registroAlumno', component: RegistroAlumnoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'bienvenido', component: SpinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
