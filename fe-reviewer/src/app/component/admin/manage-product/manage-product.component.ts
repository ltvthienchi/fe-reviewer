import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {MatDialog} from '@angular/material';
import {ModalDetailComponent} from './modal-detail/modal-detail.component';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  data:any = [];
  dataDetail:any;

  constructor(private http: HttpService, public dialog: MatDialog, router: Router) { }

  ngOnInit() {
    this.http.getAllPost().subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }

  changeActive(idProduct, active, e) {
    e.preventDefault();
    let data = {
      idProduct,
      isActive: !active
    };

    this.http.changeActive(data).subscribe(res => {
      if(res.result === 'Success') {
        this.data.forEach(item => {
          if(item.idProduct === idProduct) {
            item.active = data.isActive;
          }
        })
      }
    })
  }

  detailProduct(item) {
    const dialogRef = this.dialog.open(ModalDetailComponent, {
      width: '650px',
      data: item
    });

    dialogRef.afterClosed().subscribe(() => {
      $(document).ready(function () {
        $('html').css('overflow', 'auto');
      })
    })
  }

}
