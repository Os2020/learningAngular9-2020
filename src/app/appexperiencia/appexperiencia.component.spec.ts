import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppexperienciaComponent } from './appexperiencia.component';

describe('AppexperienciaComponent', () => {
  let component: AppexperienciaComponent;
  let fixture: ComponentFixture<AppexperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppexperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
