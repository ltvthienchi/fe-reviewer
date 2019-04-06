import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReviewerComponent } from './feedback-reviewer.component';

describe('FeedbackReviewerComponent', () => {
  let component: FeedbackReviewerComponent;
  let fixture: ComponentFixture<FeedbackReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
