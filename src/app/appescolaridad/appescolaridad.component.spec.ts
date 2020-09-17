import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppescolaridadComponent } from './appescolaridad.component';

describe('AppescolaridadComponent', () => {
  let component: AppescolaridadComponent;
  let fixture: ComponentFixture<AppescolaridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppescolaridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppescolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
