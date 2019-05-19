import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {MatDialog} from '@angular/material';
import {ModalDetailComponent} from './modal-detail/modal-detail.component';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  list: any[];
  data:any = [];
  dataDetail:any;
  check: boolean;
  queryField: FormControl = new FormControl();

  constructor(private http: HttpService, public dialog: MatDialog, router: Router) { }

  ngOnInit() {
    this.http.getAllPost().subscribe(res => {
      this.list = res;
      this.data = res;
     console.log(this.data);
    })

    const item = {
      idAdmin:localStorage.getItem('idUser'),
      isActive:'true'
  
    }
    this.http.getRoleAdmin(item).subscribe((data: any) => {
      console.log(data);
     if(data == '0' || data == '2') this.check=true; else this.check=false;
      
    });
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
  search() { 

    this.queryField.valueChanges
        .debounceTime(200)
        .distinctUntilChanged()
        .subscribe((item: any) => {
          const result = item.toUpperCase();
          this.data = this.list.filter(item => (item.nameCompany.toUpperCase().includes(result) || item.productName.toUpperCase().includes(result)))
        });
    // do something
    // console.log(event.target.value) ;
    // const key = event.target.value;
    // this.listAdmin = this.arr.filter(item => (item.fullNameAdmin.includes(key) || item.emailAdmin.includes(key)));

  }

}
