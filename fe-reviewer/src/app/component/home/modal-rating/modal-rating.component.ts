import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-rating',
  templateUrl: './modal-rating.component.html',
  styleUrls: ['./modal-rating.component.css']
})
export class ModalRatingComponent implements OnInit {

  invert = false;
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = true;

  constructor(private dialogRef: MatDialogRef<ModalRatingComponent>, @Inject(MAT_DIALOG_DATA) public dataRating) {}

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

  saveModal() {
    this.dialogRef.close(this.dataRating);
  }
}
