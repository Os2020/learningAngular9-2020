import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotacomentarioComponent } from './notacomentario.component';

describe('NotacomentarioComponent', () => {
  let component: NotacomentarioComponent;
  let fixture: ComponentFixture<NotacomentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotacomentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotacomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
