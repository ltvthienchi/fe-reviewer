import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockReviewerComponent } from './lock-reviewer.component';

describe('LockReviewerComponent', () => {
  let component: LockReviewerComponent;
  let fixture: ComponentFixture<LockReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
