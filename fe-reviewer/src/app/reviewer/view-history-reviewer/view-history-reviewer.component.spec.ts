import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryReviewerComponent } from './view-history-reviewer.component';

describe('ViewHistoryReviewerComponent', () => {
  let component: ViewHistoryReviewerComponent;
  let fixture: ComponentFixture<ViewHistoryReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHistoryReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
