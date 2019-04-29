import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class CompanyService {

  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }


  public createCompany(company) {

    const  auth_token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });
    const data = JSON.stringify(company);
    return this.http.post(this.rootUrl + '/signup/createComp', data, {headers: reqHeader});
  }

}
