import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioAdminComponent } from './admin/inicio-admin/inicio-admin.component';
import { GruposAdminComponent } from './admin/grupos-admin/grupos-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { AlumnosAdminComponent } from './admin/alumnos-admin/alumnos-admin.component';
import { DocentesAdminComponent } from './admin/docentes-admin/docentes-admin.component';
import { AgregandoAdminComponent } from './admin/agregando-admin/agregando-admin.component';


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
      {
        path: 'agregar',
        component: AgregandoAdminComponent
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
    DocentesAdminComponent,
    AgregandoAdminComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule,
  ],
  exports: [RouterModule]
})

export class PaginasModule { }
