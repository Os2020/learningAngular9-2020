import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface Escolaridad {
  name: string;
  position: number;
  
}
const ELEMENT_DATA: Escolaridad[] = [
  {position: 1, name: 'Lic. Económico - Administrativo o Social  Titulado'},
  {position: 2, name: 'Lic. Psicologia - Titulado'},
  
];

@Component({
  selector: 'app-escolaridad',
  templateUrl: './escolaridad.component.html',
  styleUrls: ['./escolaridad.component.scss']
})
export class EscolaridadComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {  }
  value = 'Clear me';

  displayedColumns: string[] = ['select', 'position', 'name','delete'];
  dataSource = new MatTableDataSource<Escolaridad>(ELEMENT_DATA);
  selection = new SelectionModel<Escolaridad>(true, []);

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
  checkboxLabel(row?: Escolaridad): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
