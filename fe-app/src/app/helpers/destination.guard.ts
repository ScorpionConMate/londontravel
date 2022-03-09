import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DestinationGuard implements CanLoad {
  constructor(private http: HttpClient) {}

  getDestinations() {
    return new Promise((res, rej) => {
      this.http.get(`${environment.baseUrl}/destinations`).subscribe((data) => {
        res(data);
      });
    });
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('DestinationGuard');
    console.log({ route, segments });

    this.http.get(`${environment.baseUrl}/destinations`).subscribe((data) => {
      console.log(data);
    });
    return true;
  }
}
