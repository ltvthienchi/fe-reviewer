import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlertComponent } from './text-alert.component';

describe('TextAlertComponent', () => {
  let component: TextAlertComponent;
  let fixture: ComponentFixture<TextAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
