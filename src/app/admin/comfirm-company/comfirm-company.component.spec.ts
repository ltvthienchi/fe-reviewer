import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmCompanyComponent } from './comfirm-company.component';

describe('ComfirmCompanyComponent', () => {
  let component: ComfirmCompanyComponent;
  let fixture: ComponentFixture<ComfirmCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfirmCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfirmCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
