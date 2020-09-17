import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnotacomentarioComponent } from './appnotacomentario.component';

describe('AppnotacomentarioComponent', () => {
  let component: AppnotacomentarioComponent;
  let fixture: ComponentFixture<AppnotacomentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppnotacomentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppnotacomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
