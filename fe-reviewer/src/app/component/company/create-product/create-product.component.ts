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
    nameProduct: 'My test',
    contentPost: 'My test',
    emailCompany: 'My test',
    infoBattery: {
      capacity: 'My test',
      type: 'My test'
    },
    infoDisplay: {
      type: 'My test',
      size: 'My test',
      resolution: 'My test',
    },
    infoPerformance: {
      platform: {
        os: 'My test',
        chip: 'My test',
        cpu: 'My test',
        gpu: 'My test'
      },
      memory: {
        card: 'My test',
        internal: 'My test'
      }
    },
    infoDesign: {
      dimensions: 'My test',
      weight: 'My test',
    },
    infoCamera: {
      main: {
        modules: 'My test',
        features: 'My test',
        video: 'My test'
      },
      self: {
        modules: 'My test',
        features: 'My test',
        video: 'My test'
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
        $('#changeCreateProduct').click();
        this.notifier.notify('success', 'New product create success');
        // this.router.navigate(['/company/' + this.idUser]);
      }
    });
  }

  editContent(): void {
    this.newPost.fileImage = this.fileToUpload;
    this.http.uploadProduct(this.newPost).subscribe((data:any) => {
      if (data.status === 'SUCCESS') {
        $('#changeCreateProduct').click();
        this.notifier.notify('success', 'Edit product success');
        // this.router.navigateByUrl('/company/' + this.idUser);
      }
    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
