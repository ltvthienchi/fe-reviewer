import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getHeader} from './header';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {URL_SERVER} from '../../../environments/environment';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  // PRODUCT POST
  public getAllPost(): Observable<any> {
    const reqHeader = new HttpHeaders({
      'No-Auth': 'True',
      'Content-Type': 'application/json'});
    return this.http.get(URL_SERVER.token_unAu + 'getAll', {headers: reqHeader});
  }

  public createComment(data) {
    return this.http.post(URL_SERVER.changePass + 'createComment', data, getHeader());
  }

  public getCommentByProduct(data) {
    return this.http.post(URL_SERVER.changePass + 'getCommentByProductId', data, getHeader());
  }

  // RATING

  public createRating(data): Observable<any> {
    return this.http.post(URL_SERVER.rating + 'create', data, getHeader());
  }

  public findByProductAndReviewer(data): Observable<any> {
    return this.http.post(URL_SERVER.rating + 'findByProductAndReviewer', data, getHeader());
  }

  // COMPANY

  public getAllCompany(): Observable<any> {
    return this.http.get(URL_SERVER.company + 'getAll', getHeader());
  }

  // PRODUCT

  public getAllProduct(): Observable<any> {

    const reqHeader = new HttpHeaders({
      'No-Auth': 'True',
      'Content-Type': 'application/json'});
    return this.http.get(URL_SERVER.product + 'getAll', getHeader());
  }

  public getProductById(data): Observable<any> {
    return this.http.post(URL_SERVER.product + 'getById', data, getHeader());
  }

  //

  public feedbackWebsite(fb): Observable<any> {
    const data = JSON.stringify(fb);
    return this.http.post(URL_SERVER.feedbackWebsite + 'postFeedback', data, getHeader());
  }

  public getReviewerInfo(email): Observable<any> {
    return this.http.post(URL_SERVER.infoReviewer + 'getReviewerInfo', email, getHeader());
  }


  public updateInfoPro(data): Observable<any> {
    let input = new FormData();
    input.append('idReviewer', localStorage.getItem('idUser'));
    input.append('firstName', data.firstName);
    input.append('lastName', data.lastName);
    input.append('dob', data.dob);
    input.append('gender', JSON.stringify(data.gender));
    if (data.avaReviewer) {
      input.append('avaReviewer', data.avaReviewer, data.avaReviewer.name);
    } else {
      input.append('avaReviewer', null);
    }
    if (data.panelReviewer) {
      input.append('panelReviewer', data.panelReviewer, data.panelReviewer.name);
    } else {
      input.append('panelReviewer', null);
    }
    const auth_token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + auth_token
    });
    console.log('====> here!', data);
    return this.http.post(URL_SERVER.infoReviewer + 'updateReview', input, { headers: reqHeader});
  }

  public changePass(cp): Observable<any> {
    const data = JSON.stringify(cp);
    return this.http.post(URL_SERVER.infoReviewer + 'updatePassword', data, getHeader());
  }

  public getAllAdmin(): Observable<any>{
    return this.http.get(URL_SERVER.admin + 'getAllAdmin', getHeader());
  }


  public uploadImage(data: any) {
    let input = new FormData();
    // file
    // nameProduct
    // contentPost
    // infoBattery
    // infoDisplay
    // infoPerformance
    // infoDesign
    // infoCamera
    // emailCompany
    console.log(data.fileImage, data.fileImage.name);
    input.append('file', data.fileImage, data.fileImage.name);
    input.append('nameProduct', data.nameProduct);
    input.append('contentPost', data.contentPost);
    input.append('emailCompany', localStorage.getItem('email'));
    input.append('infoBattery', JSON.stringify(data.infoBattery));
    input.append('infoDisplay', JSON.stringify(data.infoDisplay));
    input.append('infoPerformance', JSON.stringify(data.infoPerformance));
    input.append('infoDesign', JSON.stringify(data.infoDesign));
    input.append('infoCamera', JSON.stringify(data.infoCamera));

    const auth_token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + auth_token
    });
    // return {headers: reqHeader};

    return this.http.post(URL_SERVER.postProduct + 'postProduct', input ,{headers: reqHeader});
  }

  public getListTopRating() {
    const reqHeader = new HttpHeaders({
      'No-Auth': 'True',
      'Content-Type': 'application/json'});
    return this.http.get(URL_SERVER.token_unAu + 'getListTopRating',  {headers: reqHeader});
  }

  public getDetailCompany(idCompany: string) {
    return this.http.post(URL_SERVER.company + 'getCompanyById', idCompany, getHeader());
}

 public editAdmin(data: any) {
   return this.http.post(URL_SERVER.admin + 'editAdmin', data, getHeader());
 }

 public search (query) {
    let data = 'ALL';
    if (query) {
      data = query;
    }
   return this.http.post(URL_SERVER.searchProduct + 'searchProduct', data, getHeader());
 }
 public getLoginInfo(loginRequest) {
   const data = JSON.stringify(loginRequest);
   return this.http.post(URL_SERVER.getLoginInfo + 'getLoginInfo', loginRequest, getHeader());
 }
}
