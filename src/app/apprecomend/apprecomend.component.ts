import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-apprecomend',
  templateUrl: './apprecomend.component.html',
  styleUrls: ['./apprecomend.component.scss']
})
export class ApprecomendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  favoriteSeason: string;
  seasons: string[] = ['Recomendable', 'Recomendable con reservas', 'No recomendable', 'No cubre el perfil'];
}
