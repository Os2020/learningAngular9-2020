import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptabsComponent } from './apptabs.component';

describe('ApptabsComponent', () => {
  let component: ApptabsComponent;
  let fixture: ComponentFixture<ApptabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
