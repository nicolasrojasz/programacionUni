import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { RegistroParienteComponent } from './components/registro-pariente/registro-pariente.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: AppComponent },
  { path: 'registroPariente', component: RegistroParienteComponent },
  { path: 'registroAlumno', component: RegistroAlumnoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
