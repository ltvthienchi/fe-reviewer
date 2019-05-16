import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-subcriptions',
  templateUrl: './subcriptions.component.html',
  styleUrls: ['./subcriptions.component.css']
})
export class SubcriptionsComponent implements OnInit {

  private idReviewer: string;
  dataPost = [];
  myData: any;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.idReviewer = localStorage.getItem('idUser');
    this.loadData();
  }

  loadData() {
    this.http.getAllPostIsFollow(this.idReviewer).subscribe((data: any) => {
      if (data) {
        this.dataPost = data;
        this.myData = [];
        this.dataPost.map(item => {
          item.idReviewer = this.idReviewer;
          this.myData.push(item);
        });
      }
    });
  }

}
