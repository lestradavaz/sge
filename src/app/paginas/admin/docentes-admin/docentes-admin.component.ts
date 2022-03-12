import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Docentes {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-docentes-admin',
  templateUrl: './docentes-admin.component.html',
  styleUrls: ['./docentes-admin.component.css'],
})
export class DocentesAdminComponent implements OnInit {
  docentes: Docentes[] = [
    {
      id: 1,
      nombre: 'Armando Vivanco',
    },
    {
      id: 2,
      nombre: 'Rafael Villafaña',
    },
    {
      id: 3,
      nombre: 'Cesar Quintal',
    },
    {
      id: 4,
      nombre: 'Elsy Rios',
    },
    {
      id: 5,
      nombre: 'Manuela Gallardo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
