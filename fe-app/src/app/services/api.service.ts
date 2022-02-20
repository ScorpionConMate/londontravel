import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = environment.baseUrl;

  public constructor(public http: HttpClient) { }

  /**
   * GET request
   * @param endPoint it doesn't need / in front of the end point
   * @param options options of the request like headers, body, etc.
   */
  public get<T>(endPoint: string, options?: any): Observable<any> {
    return this.http.get<T>(this.api + endPoint, options);
  }

  /**
   * GET request
   * @param endPoint it doesn't need / in front of the end point
   * @param options options of the request like headers, body, etc.
   */
  public rawGet<T>(endPoint: string, options?: any): Observable<any> {
    return this.http.get<T>(endPoint, options);
  }

  /**
   * POST request
   * @param endPoint end point of the api
   * @param params body of the request.
   * @param options options of the request like headers, body, etc.
   */
  public post<T>(endPoint: string, params: object, options?: any): Observable<any> {
    return this.http.post<T>(this.api + endPoint, params, options);
  }

  /**
   * PUT request
   * @param endPoint end point of the api
   * @param params body of the request.
   * @param options options of the request like headers, body, etc.
   */
  public put<T>(endPoint: string, params: object, options?: any): Observable<any> {
    return this.http.put<T>(this.api + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param endPoint end point of the api
   * @param options options of the request like headers, body, etc.
   */
  public delete<T>(endPoint: string, options?: any): Observable<any> {
    return this.http.delete<T>(this.api + endPoint, options);
  }
}
