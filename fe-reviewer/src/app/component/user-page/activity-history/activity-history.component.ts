import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-activity-history',
  templateUrl: './activity-history.component.html',
  styleUrls: ['./activity-history.component.css']
})
export class ActivityHistoryComponent implements OnInit {

  @Input('idReviewer') idReviewer: string;
  @Input('imageAva') imageAva: string;
  listActivity = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    console.log(this.idReviewer);
    this.reload();
  }

  reload() {
    const listActivityConstruct = [];
    if (this.idReviewer) {
      this.http.getActivityHistory(this.idReviewer).subscribe((data: any) => {

        // console.log(data);
        for (let i = 0; i < data.length; i++) {
          const obj = JSON.parse(data[i].contentActivity);
          const activity = {
            reviewerName: '',
            idProduct: '',
            productName: '',
            typeActivity: 0,
            contentComment: '',
            imgAva: '',
            imgPanel: '',
            dtCreated: null,
            nameCompany: '',
            idCompany: '',
          };
          if (obj.typeActivity === 'RATE') {
            activity.reviewerName = obj.reviewerName;
            activity.idProduct = obj.idProduct;
            activity.productName = obj.productName;
            activity.typeActivity = 1;
            activity.dtCreated = data[i].dtCreated;
          } else if (obj.typeActivity === 'COMMENT') {
            activity.reviewerName = obj.reviewerName;
            activity.idProduct = obj.idProduct;
            activity.productName = obj.productName;
            activity.contentComment = obj.contentComment;
            activity.typeActivity = 2;
            activity.dtCreated = data[i].dtCreated;
          } else if (obj.typeActivity === 'AVA') {
            activity.reviewerName = obj.reviewerName;
            activity.imgAva = obj.imgAva;
            activity.typeActivity = 3;
            activity.dtCreated = data[i].dtCreated;
          } else if (obj.typeActivity === 'PANEL'){
            activity.reviewerName = obj.reviewerName;
            activity.imgPanel = obj.imgPanel;
            activity.typeActivity = 4;
            activity.dtCreated = data[i].dtCreated;
          } else if (obj.typeActivity === 'REVIEW') {
            activity.reviewerName = obj.reviewerName;
            activity.nameCompany = obj.nameCompany;
            activity.idCompany = obj.idCompany;
            activity.typeActivity = 5;
            activity.dtCreated = data[i].dtCreated;
          } else if (obj.typeActivity === 'FOLLOW') {
            activity.reviewerName = obj.reviewerName;
            activity.nameCompany = obj.nameCompany;
            activity.idCompany = obj.idCompany;
            activity.typeActivity = 6;
            activity.dtCreated = data[i].dtCreated;
          } else {
            activity.reviewerName = obj.reviewerName;
            activity.nameCompany = obj.nameCompany;
            activity.idCompany = obj.idCompany;
            activity.typeActivity = 7;
            activity.dtCreated = data[i].dtCreated;
          }
          listActivityConstruct.push(activity);
        }
        // console.log(this.listActivity);
      });
    }
    this.listActivity = listActivityConstruct;
    console.log(this.listActivity);
  }

}
