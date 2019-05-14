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
  private notifier: NotifierService;
  private isOpen = true;
  constructor(private httpService: HttpService, notifier: NotifierService) {
    this.notifier = notifier;
  }
  idCommentForm: FormControl = new FormControl();

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.httpService.getAllReported().subscribe((data: any) => {
      if (data) {
        this.listReported = data;
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
}
