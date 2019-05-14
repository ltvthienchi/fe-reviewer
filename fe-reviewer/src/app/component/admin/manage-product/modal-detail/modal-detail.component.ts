import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalDetailComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.data.status = 'detail';
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

}
