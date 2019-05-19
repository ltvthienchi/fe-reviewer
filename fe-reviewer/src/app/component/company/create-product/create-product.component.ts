import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {arrPostProduct} from '../../../services/local_database/post-product';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {HttpService} from '../../../services/http/http.service';
import {NotifierService} from 'angular-notifier';
import {EventMessage} from '../../../services/event_message/event-message.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {IdUserService} from '../../../services/data-global/id-user.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  @Input() idProduct;
  newPost:any = {
    fileImage: null,
    nameProduct: '',
    contentPost: '',
    emailCompany: '',
    infoBattery: {
      capacity: '',
      type: ''
    },
    infoDisplay: {
      type: '',
      size: '',
      resolution: '',
    },
    infoPerformance: {
      platform: {
        os: '',
        chip: '',
        cpu: '',
        gpu: ''
      },
      memory: {
        card: '',
        internal: ''
      }
    },
    infoDesign: {
      dimensions: '',
      weight: '',
    },
    infoCamera: {
      main: {
        modules: '',
        features: '',
        video: ''
      },
      self: {
        modules: '',
        features: '',
        video: ''
      }
    }
  };
  fileToUpload: File = null;
  idUser;
  constructor(private authGuard: AuthGuardService, private http: HttpService, private idUserSer: IdUserService,
              private notifier: NotifierService, private router: Router) { }

  ngOnInit() {
    this.idUser = this.idUserSer.getId();
    if(this.idProduct) this.getDetailPost();
  }

  getDetailPost() {
    this.http.getDetailPost(this.idProduct).subscribe((data: any) => {
      this.fileToUpload = data.imgPost;
      this.newPost.nameProduct = data.productName;
      this.newPost.contentPost = data.content;
      this.newPost.emailCompany = data.emailCompany;
      this.newPost.infoBattery = JSON.parse(data.infoBattery);
      this.newPost.infoDisplay = JSON.parse(data.infoDisplay);
      this.newPost.infoPerformance = JSON.parse(data.infoPerformance);
      this.newPost.infoDesign = JSON.parse(data.infoDesign);
      this.newPost.infoCamera = JSON.parse(data.infoCamera);
      this.newPost.idProduct = data.idProduct;
    });
  }

  uploadContent(): void {
    this.newPost.fileImage = this.fileToUpload;
    this.http.uploadImage(this.newPost).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        $('#btn-timeline').addClass('active');
        $('#timeline').addClass('active show');
        $('#changeCreateProduct').removeClass('active');
        $('#createAndEdit').removeClass('active show');
        this.notifier.notify('success', 'New product create success');
      } else {
        this.notifier.notify('error', 'New product create error');
      }
    });
  }

  editContent(): void {
    this.newPost.fileImage = this.fileToUpload;
    this.http.uploadProduct(this.newPost).subscribe((data:any) => {
      if (data.status === 'SUCCESS') {
        $('#btn-timeline').addClass('active');
        $('#timeline').addClass('active show');
        $('#changeCreateProduct').removeClass('active');
        $('#createAndEdit').removeClass('active show');
        this.notifier.notify('success', 'Edit product success');
      }
    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
