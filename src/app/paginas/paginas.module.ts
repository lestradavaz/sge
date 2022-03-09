import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioAdminComponent } from './admin/inicio-admin/inicio-admin.component';
import { GruposAdminComponent } from './admin/grupos-admin/grupos-admin.component';
import { RouterModule } from '@angular/router';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';

@NgModule({
  declarations: [
    InicioAdminComponent,
    GruposAdminComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PaginasModule { }
