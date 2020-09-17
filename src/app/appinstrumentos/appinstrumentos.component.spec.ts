import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppinstrumentosComponent } from './appinstrumentos.component';

describe('AppinstrumentosComponent', () => {
  let component: AppinstrumentosComponent;
  let fixture: ComponentFixture<AppinstrumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppinstrumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppinstrumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
