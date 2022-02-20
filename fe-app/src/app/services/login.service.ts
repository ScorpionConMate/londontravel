import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();
  baseUrl: string = environment.baseUrl + 'auth/login';

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.isLoggedIn.next(!!token);
  }

  loginUser(username: string, password: string) {
    return this.http.post<UserLogin>(this.baseUrl, { username, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this.isLoggedIn.next(true);
      })
    );
  }
}
