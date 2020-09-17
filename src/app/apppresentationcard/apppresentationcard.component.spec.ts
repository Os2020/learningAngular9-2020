import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppresentationcardComponent } from './apppresentationcard.component';

describe('ApppresentationcardComponent', () => {
  let component: ApppresentationcardComponent;
  let fixture: ComponentFixture<ApppresentationcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppresentationcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppresentationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
