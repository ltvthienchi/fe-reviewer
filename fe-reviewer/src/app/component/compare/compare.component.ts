import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {forEach} from '@angular/router/src/utils/collection';
import {DataService} from '../../services/data-service/data.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  private lstPost: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    const stringlistPro = sessionStorage.getItem('lstProduct');
    if (stringlistPro === null) {
      this.lstPost = null;
    } else {
      const lstJson = JSON.parse(stringlistPro);
      type ProductArrayType = Array<Product>;
      const lstPro: ProductArrayType = [];
      for (let i = 0; i < lstJson.length; i++) {
        const pro: Product = {
          idPostProduct: lstJson[i].idPostProduct,
          imageProduct: lstJson[i].imageProduct,
          avgDisplay: lstJson[i].avgDisplay,
          avgPerformance: lstJson[i].avgPerformance,
          avgCamera: lstJson[i].avgCamera ,
          avgBattery: lstJson[i].avgBattery,
          avgDesign: lstJson[i].avgDesign
        };
        lstPro.push(pro);

      }
      this.lstPost = lstPro;
    }
  }

  removeProduct(idProduct) {
    type ProductArrayType = Array<Product>;
    const lstPro: ProductArrayType = [];
    for (let i = 0; i < this.lstPost.length; i++) {
      if (this.lstPost[i].idPostProduct !== idProduct) {
        lstPro.push(this.lstPost[i]);
      }
    }
    let stringJson: string;
    if (lstPro.length !== 0) {
      stringJson = JSON.stringify(lstPro);
      sessionStorage.setItem('lstProduct', stringJson);
    } else {
      sessionStorage.removeItem('lstProduct');
    }
    this.lstPost = lstPro;

    this.data.decreaseProduct();
  }
}
