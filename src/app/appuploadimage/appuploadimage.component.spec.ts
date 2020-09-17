import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuploadimageComponent } from './appuploadimage.component';

describe('AppuploadimageComponent', () => {
  let component: AppuploadimageComponent;
  let fixture: ComponentFixture<AppuploadimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppuploadimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppuploadimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
