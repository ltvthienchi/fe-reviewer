import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {NotifierService} from 'angular-notifier';
import * as $ from 'jquery';
import {MatDialog} from '@angular/material';
import {ModalRatingComponent} from '../modal-rating/modal-rating.component';
import {Product} from '../../../model/product.model';
import {DataService} from '../../../services/data-service/data.service';
import {HttpService} from '../../../services/http/http.service';
import {rating} from '../../../model/rating.model';

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

  constructor(private authGuard: AuthGuardService, public dialog: MatDialog,
              notifier: NotifierService, private data: DataService,
              private http: HttpService) {
    this.notifier = notifier;
  }

  ngOnInit() {

  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }

  toggleRatings(idProduct, idReviewer) {
    const dataRating = {
      idProduct: idProduct,
      idReviewer: idReviewer,
      dtCreated: new Date(),
      rtBattery: 1,
      rtDisplay: 1,
      rtPerformance: 1,
      rtDesign: 1,
      rtCamera: 1
    };
    const dialogRef = this.dialog.open(ModalRatingComponent, {
      width: '450px',
      data: dataRating
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.http.createRating(result).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  compareProduct(item: any) {
    const product: Product = {
      idPostProduct: item.idPostProduct,
      imageProduct: item.image,
      avgDisplay: item.avgDisplay,
      avgPerformance: item.avgPerformance,
      avgCamera: item.avgCamera,
      avgBattery: item.avgBattery,
      avgDesign: 0
    };
    type ProductArrayType = Array<Product>;
    const lstPost: ProductArrayType = [];
    const sessionString = sessionStorage.getItem('lstProduct');
    const lstJson = JSON.parse(sessionString);
    if (lstJson === null) {
      lstPost.push(product);
      this.data.increaseProduct();
      const stringJson = JSON.stringify(lstPost);
      sessionStorage.setItem('lstProduct', stringJson);
    } else {
      if (!this.checkExistProductId(lstJson, product.idPostProduct)) {
        if (lstJson.length > 0 && lstJson.length < 3) {
          // const productString = JSON.stringify(product);
          this.data.increaseProduct();
          lstJson.push(product);
          const stringJson = JSON.stringify(lstJson);
          sessionStorage.setItem('lstProduct', stringJson);
        } else {
          this.showNotification('error', 'Maximum Product to compare is 3!!');
        }
      } else {
        this.showNotification('error', 'Product is existing!!');
      }

    }
    // sessionStorage.setItem('countProduct', this.count.toString());
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  public checkExistProductId(lstJson, idPostProduct) {
    for (const i in lstJson) {
      if (lstJson[i].idPostProduct === idPostProduct) {
        return true;
      }
    }
    return false;
  }
}
