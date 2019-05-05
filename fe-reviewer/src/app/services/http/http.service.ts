import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getHeader} from './header';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../../../environments/environment';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public getAllPost(): Observable<any> {
    return this.http.get(URL_SERVER.postProduct + 'getAll', getHeader());
  }

}
