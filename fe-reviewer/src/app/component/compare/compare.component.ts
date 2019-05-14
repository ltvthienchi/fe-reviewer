import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {forEach} from '@angular/router/src/utils/collection';
import {DataService} from '../../services/data-service/data.service';
import * as $ from 'jquery';
import {HttpService} from '../../services/http/http.service';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  private lstPost: any = [];
  private arrayOfKeys: any;
  private newArr: any;
  private arrName = [
    'General', 'Name', 'Image',
    'Performance', 'PlatForm', 'OS', 'Chip', 'CPU', 'GPU',
    'Memory', 'Card', 'Internal',
    'Design', 'Dimensions', 'Weight',
    'Display', 'Type', 'Size', 'Resolution',
    'Battery', 'Capacity', 'Type',
    'Camera', 'Camera Main', 'Modules', 'Features', 'Video',
    'Camera Selfie', 'Modules', 'Features', 'Video',
  ];
  private arrNameSub = ['General', 'Performance', 'Design', 'Display', 'Battery', 'Camera'];
  constructor(private data: DataService, private http: HttpService) { }

  ngOnInit() {
    $(document).ready(function () {
      $('html,body').animate({ scrollTop: 0 }, 'normal');
    });
    const stringlistPro = sessionStorage.getItem('lstProduct');
    if (stringlistPro === null) {
      this.lstPost = null;
    } else {
      const arrId = [];
      const arrLst = JSON.parse(stringlistPro);
      arrLst.map(item => {
        arrId.push(item.idProduct);
      });
      this.http.getProducts(arrId).subscribe(res => {
        this.newArr = res;
        this.newArr.map(item => {
          item.infoBattery = JSON.parse(item.infoBattery);
          item.infoDisplay = JSON.parse(item.infoDisplay);
          item.infoPerformance = JSON.parse(item.infoPerformance);
          item.infoDesign = JSON.parse(item.infoDesign);
          item.infoCamera = JSON.parse(item.infoCamera);
          const content = {
            'Sub-1': '',
            productName: item.productName,
            imgPost: item.imgPost,
            'Sub-2': '',
            'title-1': '',
            platformOne: item.infoPerformance.platform.os,
            platformTwo: item.infoPerformance.platform.chip,
            platformThree: item.infoPerformance.platform.cpu,
            platformFour: item.infoPerformance.platform.gpu,
            'title-2': '',
            memoryOne: item.infoPerformance.memory.card,
            memoryTwo: item.infoPerformance.memory.internal,
            'Sub-3': '',
            designOne: item.infoDesign.dimensions,
            designTwo: item.infoDesign.weight,
            'Sub-4': '',
            displayOne: item.infoDisplay.type,
            displayTwo: item.infoDisplay.size,
            displayThree: item.infoDisplay.resolution,
            'Sub-5': '',
            batteryOne: item.infoBattery.capacity,
            batteryTwo: item.infoBattery.type,
            'Sub-6': '',
            'title-3': '',
            cameraMainOne: item.infoCamera.main.modules,
            cameraMainTwo: item.infoCamera.main.features,
            cameraMainThree: item.infoCamera.main.video,
            'title-4': '',
            cameraSelfOne: item.infoCamera.self.modules,
            cameraSelfTwo: item.infoCamera.self.features,
            cameraSelfThree: item.infoCamera.self.video
          };
          const product = {
            idPostProduct: item.idPostProduct,
            avgBattery: item.avgBattery,
            avgCamera: item.avgCamera,
            avgDesign: item.avgDesign,
            avgDisplay: item.avgDisplay,
            avgPerformance: item.avgPerformance,
            content: content
          };
          this.lstPost.push(product);
        });
        this.arrayOfKeys = Object.keys(this.lstPost[0].content);
      });
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

  isCheckTd(nameTd, idxPost) {
    const isCheck = nameTd.split('-')[0] !== 'Sub';
    if (idxPost === 1) return 'name';
    if(nameTd === 'imgPost') return 'image';
    return (isCheck) ? 'text' : 'sub';
  }

  isCheckPer(key, data) {
    let total = data.avgCamera + data.avgBattery + data.avgDesign + data.avgPerformance + data.avgDisplay;
    if (key === 'Performance') return (data.avgPerformance * 10) + '%';
    if (key === 'Design') return (data.avgDesign * 10) + '%';
    if (key === 'Display') return (data.avgDisplay * 10) + '%';
    if (key === 'Battery') return (data.avgBattery * 10) + '%';
    if (key === 'Camera') return (data.avgCamera * 10) + '%';
    if (key === 'General') return ((total / 5) * 10) + '%';
  }

  isCheckNumber(key, data) {
    let total = data.avgCamera + data.avgBattery + data.avgDesign + data.avgPerformance + data.avgDisplay;
    if (key === 'Performance') return data.avgPerformance;
    if (key === 'Design') return data.avgDesign;
    if (key === 'Display') return data.avgDisplay;
    if (key === 'Battery') return data.avgBattery;
    if (key === 'Camera') return data.avgCamera;
    if (key === 'General') return (total / 5);
  }

  isCheckClass(key, data) {
    let defaultClass = 'progress-bar progress-bar-striped progress-bar-animated';
    let total = data.avgCamera + data.avgBattery + data.avgDesign + data.avgPerformance + data.avgDisplay;

    if (key === 'Performance') return checkClass(data.avgPerformance);
    if (key === 'Design') return checkClass(data.avgDesign);
    if (key === 'Display') return checkClass(data.avgDisplay);
    if (key === 'Battery') return checkClass(data.avgBattery);
    if (key === 'Camera') return checkClass(data.avgCamera);
    if (key === 'General') return checkClass((total / 5));

    function checkClass(value) {
      if (value <=2) return defaultClass + ' bg-danger';
      if (value > 2 && value <= 4) return defaultClass + ' bg-warning';
      if (value > 4 && value <= 6) return defaultClass;
      if (value > 6 && value <= 8) return defaultClass + ' bg-info';
      if (value > 8) return defaultClass + ' bg-success';
    }
  }
}
