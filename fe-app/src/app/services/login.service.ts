import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRegister } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = environment.baseUrl + 'auth/login';

  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string) {
    return this.http.post<UserRegister>(this.baseUrl, { username, password });
  }
}
