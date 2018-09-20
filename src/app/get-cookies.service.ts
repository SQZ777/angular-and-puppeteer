import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { catchError } from '../../node_modules/rxjs/operators';
import { Cookie } from './cookie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetCookiesService {

  constructor(private http: HttpClient) { }

  getCookie(): Observable<Cookie> {
    return this.http.get<Cookie>('http://localhost:3000/googlecookie');
  }
}
