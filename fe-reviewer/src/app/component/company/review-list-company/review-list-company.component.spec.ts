import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListCompanyComponent } from './review-list-company.component';

describe('ReviewListCompanyComponent', () => {
  let component: ReviewListCompanyComponent;
  let fixture: ComponentFixture<ReviewListCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewListCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
