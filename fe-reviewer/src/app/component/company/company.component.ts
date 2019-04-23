import { Component, OnInit } from '@angular/core';
import { arrPostProduct } from '../../services/local_database/post-product';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  value=5;
  max=5;
  min=0.5;
  step=0.5;

  myData = arrPostProduct;
  constructor() { }

  ngOnInit() {
  }


}
