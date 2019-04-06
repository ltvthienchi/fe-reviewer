import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryCompanyComponent } from './view-history-company.component';

describe('ViewHistoryCompanyComponent', () => {
  let component: ViewHistoryCompanyComponent;
  let fixture: ComponentFixture<ViewHistoryCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHistoryCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
