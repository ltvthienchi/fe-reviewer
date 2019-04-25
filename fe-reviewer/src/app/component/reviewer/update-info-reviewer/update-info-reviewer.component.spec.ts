import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoReviewerComponent } from './update-info-reviewer.component';

describe('UpdateInfoReviewerComponent', () => {
  let component: UpdateInfoReviewerComponent;
  let fixture: ComponentFixture<UpdateInfoReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInfoReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
