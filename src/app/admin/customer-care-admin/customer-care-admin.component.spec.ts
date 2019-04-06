import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCareAdminComponent } from './customer-care-admin.component';

describe('CustomerCareAdminComponent', () => {
  let component: CustomerCareAdminComponent;
  let fixture: ComponentFixture<CustomerCareAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCareAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCareAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
