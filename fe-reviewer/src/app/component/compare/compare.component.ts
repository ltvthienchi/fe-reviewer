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
  private arrayOfKeys: any;
  private arrName = ['General', 'Name', 'Image', 'Content', 'Main'];
  private arrNameSub = ['General', 'Main']
  constructor(private data: DataService) { }

  ngOnInit() {
    const stringlistPro = sessionStorage.getItem('lstProduct');
    if (stringlistPro === null) {
      this.lstPost = null;
    } else {
      this.lstPost = JSON.parse(stringlistPro);
      this.arrayOfKeys = Object.keys(this.lstPost[0].content);
      console.log(this.arrayOfKeys);
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

  isCheckTh(nameTh) {
    return this.arrNameSub.indexOf(nameTh) === - 1;
  }

  isCheckTd(nameTd) {
    console.log(nameTd);
    const isCheck = nameTd.split('-')[0] !== 'Sub';
    if(nameTd === 'imgPost') return 'image';
    return isCheck ? 'text' : 'sub';
  }
}

// avatarCompany: "http://localhost/img/reviewer/Avatar-none.png"
// avgBattery: 1
// avgCamera: 1
// avgDesign: 1
// avgDisplay: 1
// avgPerformance: 1
// content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non excepturi eum ab commodi eius accusantium modi ullam, ' +     'nisi sint, iusto quis inventore quae eos molestias. Iure eaque, mollitia molestias maxime!"
// dtCreated: "2019-05-08T16:54:40.463+0000"
// idCompany: "COMPANY_1556616033479"
// idPostProduct: "POST_1557334480454"
// idProduct: "PRODUCT_1557334480454"
// idReviewer: "COMPANY_1556616033479"
// imgPost: "http://localhost/img/reviewer/222.PNG"
// infoBattery: "{"capacity":"My test","type":"My test"}"
// infoCamera: "{"main":{"modules":"My test","features":"My test","video":"My test"},"self":{"modules":"My test","features":"My test","video":"My test"}}"
// infoDesign: "{"dimensions":"My test","weight":"My test"}"
// infoDisplay: "{"type":"My test","size":"My test","resolution":"My test"}"
// infoPerformance: "{"platform":{"os":"My test","chip":"My test","cpu":"My test","gpu":"My test"},"memory":{"card":"My test","internal":"My test"}}"
// nameCompany: "Google"
// productName: "Product No.1"
// totalComment: 0
