import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdecptopersonaComponent } from './adecptopersona.component';

describe('AdecptopersonaComponent', () => {
  let component: AdecptopersonaComponent;
  let fixture: ComponentFixture<AdecptopersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdecptopersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdecptopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
