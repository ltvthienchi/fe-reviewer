import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRatingComponent } from './modal-rating.component';

describe('ModalRatingComponent', () => {
  let component: ModalRatingComponent;
  let fixture: ComponentFixture<ModalRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
