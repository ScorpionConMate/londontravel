import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
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
    this.router.navigate(['destinations']);
  }

  // @ts-ignore
  private getSession() {
    if (localStorage.getItem('token')) {
      return {
        token: localStorage.getItem('token'),
      };
    }
  }

  isLoggedIn() {
    if (this.getSession()) {
      // @ts-ignore
      const expire: any = jwtDecode(this.getSession().token);
      return moment().isAfter(expire.exp);
    }
    return false;
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
    if (this.getSession()) {
      // @ts-ignore
      const decoded: any = jwtDecode(this.getSession().token);
      return decoded.user;
    }
  }

  // @ts-ignore
  isAdmin() {
    if (this.getSession()) {
      const user = this.infoSession();
      if (user.role === 'admin') {
        return true;
      }
      return false;
    }
  }
}
