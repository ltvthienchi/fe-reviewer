import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpService} from '../../../services/http/http.service';
import {IdUserService} from '../../../services/data-global/id-user.service';

@Component({
  selector: 'app-review-company',
  templateUrl: './review-company.component.html',
  styleUrls: ['./review-company.component.css']
})
export class ReviewCompanyComponent implements OnInit {

  dataReview = {
    ratingComp: 1,
    contentComment: '',
    idCompany: '',
    idReviewer: '',
  };

  dtCreated:any;

  idUser;

  constructor(private dialogRef: MatDialogRef<ReviewCompanyComponent>, @Inject(MAT_DIALOG_DATA) public data,
              private http: HttpService, private userSer: IdUserService) {
    this.idUser = this.userSer.getId();
    this.dataReview.idCompany = data.idCompany;
    this.dataReview.idReviewer = this.idUser;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let data = {
      idReviewer: this.idUser,
      idCompany: this.data.idCompany,
    };
    this.http.getReviewCompByIdReviewer(data).subscribe(res => {
      if(res) {
        this.dataReview.ratingComp = res.ratingComp;
        this.dataReview.contentComment = res.commentContent;
        this.dtCreated = res.dtCreated;
      }
    })
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

  saveModal() {
    console.log('here!');
    this.http.postReviewCompany(this.dataReview).subscribe(res => {
      if(res.status === 'SUCCESS') {
        this.dialogRef.close(true);
      }
    });
  }

}
