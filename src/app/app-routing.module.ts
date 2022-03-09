import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposAdminComponent } from './paginas/admin/grupos-admin/grupos-admin.component';
import { InicioAdminComponent } from './paginas/admin/inicio-admin/inicio-admin.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
