import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlversionapppComponent } from './controlversionappp.component';

describe('ControlversionapppComponent', () => {
  let component: ControlversionapppComponent;
  let fixture: ComponentFixture<ControlversionapppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlversionapppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlversionapppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
