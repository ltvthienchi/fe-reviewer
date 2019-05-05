import { HttpHeaders } from '@angular/common/http';

export function getHeader() {
  const auth_token = localStorage.getItem('userToken');
  const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + auth_token
  });
  return {headers: reqHeader};
}
