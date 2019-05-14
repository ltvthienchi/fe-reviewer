import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  idProduct: string;
  myData: any;
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idProduct = params['id'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    this.http.getDetailPost(this.idProduct).subscribe((data: any) => {
      this.myData = data;
      this.myData.idReviewer = localStorage.getItem('idUser');
    });
  }

  // ngOnInit() {
  //   let self = this;
  //   this.route.params.subscribe(params => {
  //     this.idUserSer.on().subscribe(res => {
  //       this.idUser = res;
  //     });
  //     this.idProduct = params['id'];
  //     self.initialiseState();
  //   });
  // }
  //
  // initialiseState() {
  //   this.http.getDetailPost(this.idProduct).subscribe((data: any) => {
  //     this.myData = data;
  //     this.setIdUser();
  //     // this.myData.idReviewer = localStorage.getItem('idUser');
  //   });
  // }
  //
  // setIdUser() {
  //   let self = this;
  //   if(this.idUser) {
  //     console.log('id', this.idUser);
  //     this.myData.idReviewer = localStorage.getItem('idUser');
  //   } else {
  //     setTimeout(function () {
  //       self.setIdUser();
  //     }, 500);
  //   }
  // }
}
