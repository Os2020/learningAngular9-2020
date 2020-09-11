import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdecptopersonaprofileComponent } from './adecptopersonaprofile.component';

describe('AdecptopersonaprofileComponent', () => {
  let component: AdecptopersonaprofileComponent;
  let fixture: ComponentFixture<AdecptopersonaprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdecptopersonaprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdecptopersonaprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
