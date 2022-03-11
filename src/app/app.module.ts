import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { HorariosComponent } from './horarios/horarios.component';
import { GruposComponent } from './grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    HorariosComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
