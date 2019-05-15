import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-post-detail-product',
  templateUrl: './post-detail-product.component.html',
  styleUrls: ['./post-detail-product.component.css']
})
export class PostDetailProductComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PostDetailProductComponent>, @Inject(MAT_DIALOG_DATA) public dataDetail,) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

  saveModal() {
    // this.dialogRef.close(this.curData);
  }

}
