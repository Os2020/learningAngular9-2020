import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appinstrumentos',
  templateUrl: './appinstrumentos.component.html',
  styleUrls: ['./appinstrumentos.component.scss']
})
export class AppinstrumentosComponent implements OnInit {
  checked:boolean;
  modo="Seleccion";
  constructor() 
  { }
  
  ngOnInit(): void {   
     }
  
  cambia()
  {
    debugger;
    if (this.checked == undefined)
    {
      this.checked=true;
      this.modo="Desarrollo";
      debugger;
    } 
    else if (this.checked)
    {
     this.checked=false;
      this.modo="Seleccion";
      debugger;
    }
    else if (this.checked==false)
    {
      this.checked=true;
      this.modo="Desarrollo";
      debugger; 
    }
  }
  
}
