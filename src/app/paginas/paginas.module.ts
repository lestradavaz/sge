import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioAdminComponent } from './admin/inicio-admin/inicio-admin.component';
import { GruposAdminComponent } from './admin/grupos-admin/grupos-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { AlumnosAdminComponent } from './admin/alumnos-admin/alumnos-admin.component';
import { DocentesAdminComponent } from './admin/docentes-admin/docentes-admin.component';


const routes: Routes = [
  {
    path: 'admin',
    component: InicioAdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'grupos'
      },
      {
        path: 'grupos',
        component: GruposAdminComponent
      },
      {
        path: 'alumnos',
        component: AlumnosAdminComponent
      },
      {
        path: 'docentes',
        component: DocentesAdminComponent
      },
    ]
  }
];
@NgModule({
  declarations: [
    InicioAdminComponent,
    GruposAdminComponent,
    CabeceraComponent,
    AlumnosAdminComponent,
    DocentesAdminComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule,
  ],
  exports: [RouterModule]
})

export class PaginasModule { }
