import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'; /*Para su funcionamiento en app.module agregaste:FormModule,Reactiveforms*/
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
@Component({
  selector: 'app-profilesearch',
  templateUrl: './profilesearch.component.html',
  styleUrls: ['./profilesearch.component.scss']
})

  
export class ProfilesearchComponent implements OnInit {

  
  control = new FormControl();
  streets: string[] = ['Gte.R.H', 'Director R.H', 'Reclutadora', 'Coordinadora de Rec.'];
  filteredStreets: Observable<string[]>;


  ngOnInit(): void 
  {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
