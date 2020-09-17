import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcversionComponent } from './appcversion.component';

describe('AppcversionComponent', () => {
  let component: AppcversionComponent;
  let fixture: ComponentFixture<AppcversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
