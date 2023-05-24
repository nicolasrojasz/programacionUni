import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroParienteComponent } from './components/registro-pariente/registro-pariente.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroParienteComponent,
    RegistroAlumnoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
