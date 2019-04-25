import { Component, OnInit } from '@angular/core';
import {Company} from '../../model/company.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  company: Company = new Company();

  constructor() { }

  ngOnInit() {
  }

  createCompany() {
      this.companys.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });
  }
}
