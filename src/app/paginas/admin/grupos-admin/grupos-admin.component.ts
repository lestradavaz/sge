import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Grupos {
  nombre: string,
}

@Component({
  selector: 'app-grupos-admin',
  templateUrl: './grupos-admin.component.html',
  styleUrls: ['./grupos-admin.component.css']
})
export class GruposAdminComponent implements OnInit {

  grupos: Grupos[] = [
    {
      nombre: 'Grupo A'
    },
    {
      nombre: 'Grupo B'
    },
    {
      nombre: 'Grupo C'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
