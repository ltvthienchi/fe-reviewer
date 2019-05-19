import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {FormControl} from '@angular/forms';
import {NotifierService} from 'angular-notifier';
import * as $ from 'jquery';

@Component({
  selector: 'app-reported-comment',
  templateUrl: './reported-comment.component.html',
  styleUrls: ['./reported-comment.component.css']
})
export class ReportedCommentComponent implements OnInit {

  listReported: any;
  check: boolean;
  list:any;
  queryField: FormControl = new FormControl();
  private notifier: NotifierService;
  private isOpen = true;
  constructor(private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }
  idCommentForm: FormControl = new FormControl();

  ngOnInit() {
    this.loadData();
    const item = {
      idAdmin: localStorage.getItem('idUser'),
      isActive: 'true'

    }
    this.httpService.getRoleAdmin(item).subscribe((data: any) => {
      // console.log(data);
      if (data == '0' || data == '3') this.check = true; else this.check = false;

    });
  }

  loadData() {
    this.httpService.getAllReported().subscribe((data: any) => {
      if (data) {
        this.listReported = data;
        this.list=data;
      }
    });
  }

  saveCommentToModal(idComment: any) {
    this.idCommentForm.setValue(idComment);
    $('#deleteEmployeeModal').click();
    this.isOpen = true;
  }

  deleteComment(idComment: any) {
    console.log(idComment);
    this.httpService.deleteComment(idComment).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        this.showNotification('success', 'Delete Comment Successfully!!');
        $('#deleteEmployeeModal').click();
        this.loadData();
      }
    });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
  search() { 

    this.queryField.valueChanges
        .debounceTime(200)
        .distinctUntilChanged()
        .subscribe((item: any) => {
          const result = item.toUpperCase();
          this.listReported = this.list.filter(item => 
            (item.reviewerComment.toUpperCase().includes(result) || item.contentComment.toUpperCase().includes(result)));
            //  console.log(this.listCompany);
            //  console.log(result);
             

        });
    // do something
    // console.log(event.target.value) ;
    // const key = event.target.value;
    // this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.includes(key) || item.emailAdmin.includes(key)));

  }

}
