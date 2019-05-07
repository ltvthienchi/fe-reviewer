import { Component, OnInit } from '@angular/core';
import {arrPostProduct} from '../../../services/local_database/post-product';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  value = 5;
  max = 5;
  min = 0.5;
  step = 0.5;

  myData = arrPostProduct;
  newPost = {
    fileImage: null,
    nameProduct: null,
    contentPost: null,
    emailCompany: null,
    infoBattery: {
      capacity: null,
      type: null
    },
    infoDisplay: {
      type: null,
      size: null,
      resolution: null,
    },
    infoPerformance: {
      platform: {
        os: null,
        chip: null,
        cpu: null,
        gpu: null
      },
      memory: {
        card: null,
        internal: null
      }
    },
    infoDesign: {
      dimensions: null,
      weight: null,
    },
    infoCamera: {
      main: {
        modules: null,
        features: null,
        video: null
      },
      self: {
        modules: null,
        features: null,
        video: null
      }
    }
  };
  fileToUpload: File = null;
  constructor(private authGuard: AuthGuardService, private http: HttpService) { }

  ngOnInit() {
  }

  checkAuthGuard() {
    return this.authGuard.checkLogin();
  }

  isCompanyAccount() {
    return localStorage.getItem('role') === 'ROLE_COMPANY';
  }

  uploadContent(): void {
    console.log(this.newPost);
    // const upload = {
    //   name: this.newPost.name,
    //   content:this.newPost.content,
    //   file: this.fileToUpload,
    // };
    // this.http.uploadImage(upload).subscribe((data: any) => {
    //   console.log(data);
    // })

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
