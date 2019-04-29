import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {

    const  auth_token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });
    const data = JSON.stringify(user);
    return this.http.post(this.rootUrl + '/signup/createUser', data, {headers : reqHeader});
  }

  userAuthentication(userName, password) {
    const reqHeader = new HttpHeaders({'No-Auth': 'True',
      'Content-Type': 'application/json'});
    const account = {
      userName: userName,
      password: password
    };
    const data = JSON.stringify(account);
    return this.http.post(this.rootUrl + '/token/generate-token', data, {headers : reqHeader});
  }
}
