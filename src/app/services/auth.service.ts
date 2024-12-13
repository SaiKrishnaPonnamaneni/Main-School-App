import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  doLogin(payLoad:Login):Observable<Token>{
   return this._httpClient.post<Token>("https://reqres.in/api/login",payLoad)
  }
}
