import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcasonegocioComponent } from './appcasonegocio.component';

describe('AppcasonegocioComponent', () => {
  let component: AppcasonegocioComponent;
  let fixture: ComponentFixture<AppcasonegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcasonegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcasonegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
