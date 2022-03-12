import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Alumnos {
  id: number,
  nombre: string,
}

@Component({
  selector: 'app-alumnos-admin',
  templateUrl: './alumnos-admin.component.html',
  styleUrls: ['./alumnos-admin.component.css'],
})
export class AlumnosAdminComponent implements OnInit {
  alumnos: Alumnos[] = [
    {
      id: 1,
      nombre: 'Luis Manuel',
    },
    {
      id: 2,
      nombre: 'Saulo Romano',
    },
    {
      id: 3,
      nombre: 'Andres Silva',
    },
    {
      id: 4,
      nombre: 'David Soto',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
