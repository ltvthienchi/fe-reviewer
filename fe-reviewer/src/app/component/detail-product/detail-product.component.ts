import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../services/http/http.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {IdUserService} from '../../services/data-global/id-user.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  idProduct: string;
  idUser: string;
  myData: any;
  constructor(private route: ActivatedRoute, private http: HttpService, private idUserSer: IdUserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = this.idUserSer.getId();
      this.idProduct = params['id'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    this.http.getDetailPost(this.idProduct).subscribe((data: any) => {
      console.log('end');
      this.myData = data;
      this.myData.idReviewer = this.idUser;
    });
  }

}
