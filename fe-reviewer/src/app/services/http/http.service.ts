import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getHeader} from './header';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URL_SERVER} from '../../../environments/environment';
import { FeedbackWebsite } from '../../model/feedbackWebsite.model';

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


  public postprofile(): Observable<any> {
    return this.http.post(URL_SERVER.infoReviewer + 'updateReview', getHeader());
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


}
