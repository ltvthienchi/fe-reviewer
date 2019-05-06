import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getHeader} from './header';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../../../environments/environment';
import { FeedbackWebsite } from '../../model/feedbackWebsite.model';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  // PRODUCT POST
  public getAllPost(): Observable<any> {
    return this.http.get(URL_SERVER.postProduct + 'getAll', getHeader());
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




}
