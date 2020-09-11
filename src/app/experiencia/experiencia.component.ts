import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


export interface Experiencia {
  name: string;
  position: number;
  
}
const ELEMENT_DATA: Experiencia[] = [
  {position: 1, name: '10 años de experiencia consolidada en Recursos Humanos como Generalista y/o Gerente.'},
  {position: 2, name: 'Experiencia en plantas operativas y manejo de equipos de trabajo'},
  {position: 3, name: 'Conocimiento en Relaciones Laborales'},
  {position: 4, name: 'Conocimiento en Nómina'},
  {position: 5, name: 'Conocimiento en Compensaciones'},
];

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {  }

  value = 'Clear me';

  displayedColumns: string[] = ['select', 'position', 'name','delete'];
  dataSource = new MatTableDataSource<Experiencia>(ELEMENT_DATA);
  selection = new SelectionModel<Experiencia>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Experiencia): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
