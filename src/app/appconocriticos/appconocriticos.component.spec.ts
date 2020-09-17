import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppconocriticosComponent } from './appconocriticos.component';

describe('AppconocriticosComponent', () => {
  let component: AppconocriticosComponent;
  let fixture: ComponentFixture<AppconocriticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppconocriticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppconocriticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
