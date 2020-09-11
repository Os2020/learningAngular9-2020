import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlversionappp',
  templateUrl: './controlversionappp.component.html',
  styleUrls: ['./controlversionappp.component.scss']
})
export class ControlversionapppComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {       }
  states: string[] = [
    '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7',
    '1.8', '1.9', '2.0', '2.1'
  ];
}
