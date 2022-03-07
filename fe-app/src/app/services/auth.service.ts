import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { User, UserSession } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'auth';
  constructor(private apiService: ApiService, private router: Router) {}

  public login(username: any, password: any) {
    const payload = {
      username,
      password,
    };
    return this.apiService
      .post(`${this.baseUrl}/login`, payload)
      .subscribe((arg) => this.setSession(arg));
  }

  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
    this.router.navigate(['staff/destinations']);
  }

  private get token(){
    return localStorage.getItem('token') ?? false;
  }

  private getSession(): UserSession {
    // @ts-ignore
    return this.token ? jwtDecode(this.token).user : false;
  }

  isLoggedIn() {
    return !!this.getSession();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/staff', { skipLocationChange: true }).then(() => {
      this.router.navigate(['staff']);
    });
  }

  infoSession() {
    return this.getSession()
  }

  // @ts-ignore
  isAdmin() {
    if (this.getSession()) {
      const user = this.infoSession();
      if (user?.role === 'admin') {
        return true;
      }
      return false;
    }
  }
}
