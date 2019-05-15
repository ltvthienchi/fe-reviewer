import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailProductComponent } from './post-detail-product.component';

describe('PostDetailProductComponent', () => {
  let component: PostDetailProductComponent;
  let fixture: ComponentFixture<PostDetailProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
