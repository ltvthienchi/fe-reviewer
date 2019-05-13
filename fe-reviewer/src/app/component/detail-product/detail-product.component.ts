import { Component, OnInit } from '@angular/core';
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
  constructor(private activatedRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.idProduct = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.getDetailPost(this.idProduct).subscribe((data: any) => {
      this.myData = data;
      this.myData.idReviewer = localStorage.getItem('idUser');
    });
  }

}
