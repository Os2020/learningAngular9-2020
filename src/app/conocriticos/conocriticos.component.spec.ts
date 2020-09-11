import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocriticosComponent } from './conocriticos.component';

describe('ConocriticosComponent', () => {
  let component: ConocriticosComponent;
  let fixture: ComponentFixture<ConocriticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocriticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocriticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
