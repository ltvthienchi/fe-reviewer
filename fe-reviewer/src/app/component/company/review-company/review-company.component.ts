import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-review-company',
  templateUrl: './review-company.component.html',
  styleUrls: ['./review-company.component.css']
})
export class ReviewCompanyComponent implements OnInit {

  dataReview = {
    rate: 1,
    content: ''
  };

  constructor(private dialogRef: MatDialogRef<ReviewCompanyComponent>, @Inject(MAT_DIALOG_DATA) public data) {

  }

  ngOnInit() {
    console.log(this.data);
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

  saveModal() {
    this.dialogRef.close(this.dataReview);
  }

}
