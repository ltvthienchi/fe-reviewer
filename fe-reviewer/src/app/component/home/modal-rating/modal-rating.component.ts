import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpService} from '../../../services/http/http.service';

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
  curData = {
    idProduct: null,
    idReviewer: null,
    dtCreated: new Date(),
    rtBattery: 1,
    rtDisplay: 1,
    rtPerformance: 1,
    rtDesign: 1,
    rtCamera: 1
  };

  constructor(private dialogRef: MatDialogRef<ModalRatingComponent>, @Inject(MAT_DIALOG_DATA) public dataRating,
              private http: HttpService) {}

  ngOnInit() {
    console.log(this.dataRating.idProduct, this.dataRating.idReviewer);
    this.http.findByProductAndReviewer(this.dataRating).subscribe(res => {
      if (res) {
        this.curData = res;
      } else {
        this.curData = this.dataRating;
      }
    })
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

  saveModal() {
    this.dialogRef.close(this.curData);
  }
}
