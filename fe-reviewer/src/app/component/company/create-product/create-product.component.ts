import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {arrPostProduct} from '../../../services/local_database/post-product';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {HttpService} from '../../../services/http/http.service';
import {NotifierService} from 'angular-notifier';
import {EventMessage} from '../../../services/event_message/event-message.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {IdUserService} from '../../../services/data-global/id-user.service';
import {AbstractControl} from '@angular/forms';

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
  checkValidator = false;
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
    if(this.validatorForm()) {
      this.newPost.fileImage = this.fileToUpload;
      this.http.uploadImage(this.newPost).subscribe((data: any) => {
        console.log('data', data);
        if (data.status === 'SUCCESS') {
          $('#btn-timeline').addClass('active');
          $('#timeline').addClass('active show');
          $('#changeCreateProduct').removeClass('active');
          $('#createAndEdit').removeClass('active show');
          this.clearForm();
          this.notifier.notify('success', 'New product create success');
        } else {
          this.notifier.notify('error', 'New product create error');
        }
      });
    }
  }

  clearForm() {
    this.newPost = {
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
    this.fileToUpload = null;
    setTimeout(function () {
      $('#btn-reset-data-company').click();
    }, 0);
  }

  editContent(): void {
    if(this.validatorForm()) {
      this.newPost.fileImage = this.fileToUpload;
      this.http.uploadProduct(this.newPost).subscribe((data:any) => {
        console.log('data', data);
        if (data.status === 'SUCCESS') {
          $('#btn-timeline').addClass('active');
          $('#timeline').addClass('active show');
          $('#changeCreateProduct').removeClass('active');
          $('#createAndEdit').removeClass('active show');
          this.clearForm();
          this.notifier.notify('success', 'Edit product success');
        }
      })
    }
  }

  handleFileInput(files: FileList) {
    const tempImg = files[0].name.split('.');
    const exFile = tempImg[tempImg.length - 1];
    if(exFile.toLocaleLowerCase() === 'png' || exFile.toLocaleLowerCase() === 'jpg') {
      this.fileToUpload = files.item(0);
    } else {
      this.notifier.notify('error', 'Please chose image has .png or .jpg');
    }
  }

  validatorForm() {
    const validName = this.validatorRequired(this.newPost.nameProduct);
    const validContent = this.validatorRequired(this.newPost.contentPost);
    if (validName) {
      this.notifier.notify('error', 'Name of Product error, ' + validName);
      return false;
    } else if (validContent) {
      this.notifier.notify('error', 'Content of Product error, ' + validContent);
      return false;
    } else if(!this.fileToUpload) {
      this.notifier.notify('error', 'Please chose image product');
    } else {
      this.checkValidator = true;
      return true;
    }
  }

  validatorRequired(value) {
    const checkOne = value.replace(/  +/g, ' ');
    const checkTwo = checkOne.split('')[0] === ' ';
    const temp = checkOne.split('');
    const checkThree = checkOne.split('')[temp.length - 1] === ' ';
    const regex = /^[a-z A-Z0-9]{1,50}$/;
    const myRe = regex.exec(value);
    if (!value) return 'field is required';
    if (checkTwo) return 'Please do not press multiple space, or space in first!';
    if (checkThree) return 'Please do not press multiple space, or space in last!';
    // if (value.length > 50) return 'Field must be greater 50';
    // if (!myRe) return 'Please no enter special character';
    return null;
  }

}
