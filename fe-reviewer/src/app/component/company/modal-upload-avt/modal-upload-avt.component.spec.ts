import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadAvtComponent } from './modal-upload-avt.component';

describe('ModalUploadAvtComponent', () => {
  let component: ModalUploadAvtComponent;
  let fixture: ComponentFixture<ModalUploadAvtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUploadAvtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUploadAvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
