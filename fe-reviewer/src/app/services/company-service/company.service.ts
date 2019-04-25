import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class CompanyService {

  readonly rootUrl = 'http://localhost:8080/data/company/';
  constructor(private http: HttpClient) { }


  public createCompany(company) {

    const  auth_token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth_token
    });
    const companyObj = {
      nameCompany: company.nameCompany,
      addrCompany: company.addrCompany,
      webCompany: company.webCompany,
      telCompany: company.telCompany,
      dtCreated: Date.now(),
      emailCompany: company.emailCompany,
      password: company.password,
      confirmPassword: company.confirmPassword
    };
    const data = JSON.stringify(companyObj);
    return this.http.post(this.rootUrl + 'createComp', data, {headers: reqHeader});
  }

}
