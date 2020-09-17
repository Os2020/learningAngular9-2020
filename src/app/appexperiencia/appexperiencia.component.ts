import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface Experiencia {
  name: string;
  position: number;
  name2:string;
}
const ELEMENT_DATA: Experiencia[] = [
  {position: 1, name: '10 años de experiencia consolidada en Recursos Humanos como Generalista y/o Gerente.',name2:''},
  {position: 2, name: 'Experiencia en plantas operativas y manejo de equipos de trabajo',name2:''},
  {position: 3, name: 'Conocimiento en Relaciones Laborales',name2:''},
  {position: 4, name: 'Conocimiento en Nómina',name2:''},
  {position: 5, name: 'Conocimiento en Compensaciones',name2:''},
];
@Component({
  selector: 'app-appexperiencia',
  templateUrl: './appexperiencia.component.html',
  styleUrls: ['./appexperiencia.component.scss']
})
export class AppexperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = 'Clear me';

  displayedColumns: string[] = ['select', 'position', 'name','name2','name3','delete'];
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
