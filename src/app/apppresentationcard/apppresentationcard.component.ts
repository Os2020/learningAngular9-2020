import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-apppresentationcard',
  templateUrl: './apppresentationcard.component.html',
  styleUrls: ['./apppresentationcard.component.scss']
})
export class ApppresentationcardComponent implements OnInit {

  pricometria = new FormControl(16, Validators.min(10));

  constructor() {};
  


  ngOnInit(): void {
  }

}
