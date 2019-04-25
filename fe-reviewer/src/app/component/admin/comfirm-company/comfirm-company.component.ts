import { Component, OnInit } from '@angular/core';
import { arrCompany } from '../../../services/local_database/company';

@Component({
  selector: 'app-comfirm-company',
  templateUrl: './comfirm-company.component.html',
  styleUrls: ['./comfirm-company.component.css']
})
export class ComfirmCompanyComponent implements OnInit {

  data = arrCompany;

  constructor() { }

  ngOnInit() {
  }

}
