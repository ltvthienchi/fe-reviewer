import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { getHeader } from './header';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL_SERVER } from '../../../environments/environment';
import { AdminBlock } from '../../model/AdminBlock.model';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  // PRODUCT POST
  public getAllPost(): Observable<any> {
    const reqHeader = new HttpHeaders({
      'No-Auth': 'True',
      'Content-Type': 'application/json'
    });
    return this.http.get(URL_SERVER.token_unAu + 'getAll', { headers: reqHeader });
  }

  public createComment(data) {
    return this.http.post(URL_SERVER.user + 'createComment', data, getHeader());
  }

  public getCommentByProduct(data) {
    return this.http.post(URL_SERVER.user + 'getCommentByProductId', data, getHeader());
  }

  public deletePostProduct(idProduct) {
    return this.http.post(URL_SERVER.postProduct + 'deleteProduct', idProduct, getHeader());
  }

  public updatePostProduct(data) {
    return this.http.post(URL_SERVER.postProduct + 'updateProduct', data, getHeader());
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
      'Content-Type': 'application/json'
    });
    return this.http.get(URL_SERVER.product + 'getAll', getHeader());
  }

  public getProductById(data): Observable<any> {
    return this.http.post(URL_SERVER.product + 'getById', data, getHeader());
  }

  public changeActive(data): Observable<any> {
    return this.http.post(URL_SERVER.product + 'changeActive', data, getHeader());
  }
  
  public reportComment(idComment) {
    return this.http.post(URL_SERVER.user + 'reportComment', idComment, getHeader());
  }

  //

  public feedbackWebsite(fb): Observable<any> {
    const data = JSON.stringify(fb);
    return this.http.post(URL_SERVER.feedbackWebsite + 'postFeedback', data, getHeader());
  }

  public getReviewerInfo(email): Observable<any> {
    return this.http.post(URL_SERVER.infoReviewer + 'getReviewerInfo', email, getHeader());
  }

  public getReviewerInfoById(idReviewer): Observable<any> {
    return this.http.post(URL_SERVER.infoReviewer + 'getReviewerInfoById', idReviewer, getHeader());
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
    return this.http.post(URL_SERVER.infoReviewer + 'updateReview', input, { headers: reqHeader });
  }

  public changePass(cp): Observable<any> {
    const data = JSON.stringify(cp);
    return this.http.post(URL_SERVER.infoReviewer + 'updatePassword', data, getHeader());
  }

  public getAllAdmin(): Observable<any> {
    return this.http.get(URL_SERVER.admin + 'getAllAdmin', getHeader());
  }


  public uploadImage(data: any) {
    let input = new FormData();
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
    return this.http.post(URL_SERVER.postProduct + 'postProduct', input, { headers: reqHeader });
  }

  public uploadProduct(data: any) {
    let input = new FormData();
    console.log(data.fileImage, data.fileImage.name);
    input.append('file', data.fileImage, data.fileImage.name);
    input.append('nameProduct', data.nameProduct);
    input.append('contentPost', data.contentPost);
    input.append('idProduct', data.idProduct);
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
    return this.http.post(URL_SERVER.postProduct + 'updateProduct', input, { headers: reqHeader });
  }

  public getListTopRating() {
    const reqHeader = new HttpHeaders({
      'No-Auth': 'True',
      'Content-Type': 'application/json'
    });
    return this.http.get(URL_SERVER.token_unAu + 'getListTopRating', { headers: reqHeader });
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
 public getDetailPost(idProduct) {
    return this.http.post(URL_SERVER.postProduct + 'getDetailPost', idProduct, getHeader());
 }

  public getProducts(products) {
    return this.http.post(URL_SERVER.postProduct + 'getPostToCompare', products, getHeader());


  }

  public addAdmin(data: any) {
    return this.http.post(URL_SERVER.admin + 'createAdmin', data, getHeader());
  }

  public getRoleAdmin(data: any){
    return this.http.post(URL_SERVER.admin + 'getRole', data, getHeader());

  }

  public resetPassAdmin(data: any){
    return this.http.post(URL_SERVER.admin + 'resetPassAdmin', data, getHeader());

  }
  public lockAdmin(data: any){
    return this.http.post(URL_SERVER.admin + 'lockAdmin', data, getHeader());

  }

 public getAllReported() {
   return this.http.get(URL_SERVER.admin + 'getAllCommentReported', getHeader());
 }

  public deleteComment(idComment) {
    return this.http.post(URL_SERVER.admin + 'deleteComment', idComment, getHeader());
  }


  public checkIsFollow(data) {
    return this.http.post(URL_SERVER.company + 'checkIsFollow', data, getHeader());
  }

  public followCompany(data) {
    return this.http.post(URL_SERVER.company + 'followCompany', data, getHeader());
  }

  public getAllReviewer(): Observable<any> {
    return this.http.get(URL_SERVER.admin + 'getAllReviewer', getHeader());
  }

  public getAllUser(): Observable<any> {
    return this.http.get(URL_SERVER.admin + 'getAllUser', getHeader());

  }


  public getAllFeedback(): Observable<any> {
    return this.http.get(URL_SERVER.feedbackWebsite + 'getAllFeedback', getHeader());

  }
  public getAllBusiness(): Observable<any> {
    return this.http.get(URL_SERVER.admin + 'getAllBusiness', getHeader());

  }

  public changeActiveAccount(data: any){
    return this.http.post(URL_SERVER.admin + 'changeActive', data, getHeader());
  }

  public getAllPostIsFollow(id): Observable<any> {
    return this.http.post(URL_SERVER.infoReviewer + 'getAllPostIsFollow', id, getHeader());

  }

  public signInGoogle(id): Observable<any> {
    const reqHeader = new HttpHeaders({
      'No-Auth': 'True',
      'Content-Type': 'application/json'
    });
    return this.http.post(URL_SERVER.token_unAu + 'google-generate-token', id, { headers: reqHeader });
  }

  public sendMail(data): Observable<any> {
    return this.http.post(URL_SERVER.admin + 'sendMail', data, getHeader());

  }
}
