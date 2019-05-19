import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadPanelComponent } from './modal-upload-panel.component';

describe('ModalUploadPanelComponent', () => {
  let component: ModalUploadPanelComponent;
  let fixture: ComponentFixture<ModalUploadPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUploadPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUploadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
