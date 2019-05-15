import { Injectable } from '@angular/core';
import {Broadcaster} from '../broadcaster/broadcaster.service';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs/Observable';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class IdUserService {
  constructor(private broadcaster: Broadcaster, private jwtHelper: JwtHelperService) {}

  fire(data): void {
    console.log(data);
    this.broadcaster.broadcast('id', data);
  }

  on(): Observable<any> {
    return this.broadcaster.on<string>('id');
  }

  getId() {
    const tokenDecoded = this.jwtHelper.decodeToken(localStorage.getItem('userToken'));
    return tokenDecoded ? tokenDecoded.idUser : '';
  }

}
