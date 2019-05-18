import {Component, Inject, OnInit} from '@angular/core';
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
    idReviewer: ''
  };

  constructor(private dialogRef: MatDialogRef<ReviewCompanyComponent>, @Inject(MAT_DIALOG_DATA) public data,
              private http: HttpService, private userSer: IdUserService) {
    const idUser = this.userSer.getId();
    this.dataReview.idCompany = data.idCompany;
    this.dataReview.idReviewer = idUser;
  }

  ngOnInit() {
    console.log(this.data);
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

  saveModal() {
    this.http.postReviewCompany(this.dataReview).subscribe(res => {
      if(res.status === 'SUCCESS') {
        this.dialogRef.close(true);
      }
    });
  }

}
