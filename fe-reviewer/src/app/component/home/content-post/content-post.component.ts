import { Component, OnInit, Input } from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {NotifierService} from 'angular-notifier';
import * as $ from 'jquery';
import {MatDialog} from '@angular/material';
import {ModalRatingComponent} from '../modal-rating/modal-rating.component';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit {

  @Input() item;
  private notifier: NotifierService;
  toggleButton: boolean = false;
  toggleRating = true;

  invert = false;
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = true;
  value = 1;

  constructor(private authGuard: AuthGuardService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  checkAuthGuard() {
    return this.authGuard.canActivate();
  }

  toggleRatings(id) {
    const dataRating = {
      display: 0,
      performance: 0,
      camera: 0,
      battery: 0
    };
    const dialogRef = this.dialog.open(ModalRatingComponent, {
      width: '450px',
      data: dataRating
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
      }
    });
  }

}
