import { Component, Input, OnInit } from '@angular/core';

interface AdminComponentes {
  titulo: string;
  path: string;
}

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Input() titulo: string | undefined;

  adminComponentes: AdminComponentes[] = [
    {
      titulo: 'Alumnos',
      path: '/admin/alumnos'
    },
    {
      titulo: 'Grupos',
      path: '/admin/grupos'
    },
    {
      titulo: 'Docentes',
      path: '/admin/docentes'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
