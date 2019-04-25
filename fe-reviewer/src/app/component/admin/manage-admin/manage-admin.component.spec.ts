import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdminComponent } from './manage-admin.component';

describe('ManageAdminComponent', () => {
  let component: ManageAdminComponent;
  let fixture: ComponentFixture<ManageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   $(document).ready(function(){
//     // Activate tooltip
//     $('[data-toggle="tooltip"]').tooltip();
    
//     // Select/Deselect checkboxes
//     var checkbox = $('table tbody input[type="checkbox"]');
//     $("#selectAll").click(function(){
//       if(this.checked){
//         checkbox.each(function(){
//           this.checked = true;                        
//         });
//       } else{
//         checkbox.each(function(){
//           this.checked = false;                        
//         });
//       } 
//     });
//     checkbox.click(function(){
//       if(!this.checked){
//         $("#selectAll").prop("checked", false);
//       }
//     });
// });
});
