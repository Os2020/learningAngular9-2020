import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
export interface CasoNegocio {
  name: string;
  position: number;
  valoracion:number;
}
const ELEMENT_DATA: CasoNegocio[] = [
  {position: 1, name: 'PERSUADE',valoracion:2},
  {position: 2, name: 'ADAPTABILIDAD SITUACIONAL',valoracion:2},
  {position: 3, name: 'SABE MOVERSE EN REDES',valoracion:2},
  {position: 4, name: 'AGILIDAD MENTAL',valoracion:2},
  {position: 5, name: 'AGILIDAD INTERPERSONAL',valoracion:2},
  {position: 6, name: 'AGILIDAD PARA EL CAMBIO',valoracion:2},
  {position: 7, name: 'AGILIDAD CON LOS RESULTADOS',valoracion:2},
  {position: 8, name: 'JERARQUIA',valoracion:2},
  {position: 9, name: 'ESTATUS',valoracion:2},
  {position: 10, name:'APRENDIZAJE',valoracion:2},
];

@Component({
  selector: 'app-appcasonegocio',
  templateUrl: './appcasonegocio.component.html',
  styleUrls: ['./appcasonegocio.component.scss']
})
export class AppcasonegocioComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {  }
  displayedColumns: string[] = ['position', 'name','valoracion'];
  dataSource = new MatTableDataSource<CasoNegocio>(ELEMENT_DATA);
  

}
