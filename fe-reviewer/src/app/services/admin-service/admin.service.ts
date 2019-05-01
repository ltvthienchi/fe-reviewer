import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../model/user.model';

@Injectable()
export class AdminService {

  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  adminAuthentication(userName, password) {
    const reqHeader = new HttpHeaders({'No-Auth': 'True',
      'Content-Type': 'application/json'});
    const account = {
      userName: userName,
      password: password
    };
    const data = JSON.stringify(account);
    return this.http.post(this.rootUrl + '/token/generate-token-admin', data, {headers : reqHeader});
  }

}
