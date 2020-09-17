import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprecomendComponent } from './apprecomend.component';

describe('ApprecomendComponent', () => {
  let component: ApprecomendComponent;
  let fixture: ComponentFixture<ApprecomendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprecomendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprecomendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
