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
}
