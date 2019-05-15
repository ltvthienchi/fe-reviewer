import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AlertMessageComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeModal(isCheck): void {
    this.dialogRef.close(isCheck);
  }

}
