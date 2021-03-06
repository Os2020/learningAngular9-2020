import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


export interface ConocimientosCriticos {
  name: string;
  position: number;
  
}
const ELEMENT_DATA: ConocimientosCriticos[] = [
  {position: 1, name: 'a) Relación con Sindicatos'},
  {position: 2, name: 'b) Seguridad e Higiene'},
  
];

@Component({
  selector: 'app-conocriticos',
  templateUrl: './conocriticos.component.html',
  styleUrls: ['./conocriticos.component.scss']
})
export class ConocriticosComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {  }
  value = 'Clear me';

  displayedColumns: string[] = ['select', 'position', 'name','delete'];
  dataSource = new MatTableDataSource<ConocimientosCriticos>(ELEMENT_DATA);
  selection = new SelectionModel<ConocimientosCriticos>(true, []);

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
  checkboxLabel(row?: ConocimientosCriticos): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
