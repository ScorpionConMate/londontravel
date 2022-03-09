import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class Authv2Guard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    console.log('Authv2Guard.constructor');
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    console.log('Authv2Guard.canActivate', route);
    return this.authService.isLoggedIn();

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    console.log('Authv2Guard.canLoad');
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/staff']);
    return false;
  }


}
