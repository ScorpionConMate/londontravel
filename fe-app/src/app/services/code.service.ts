import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CodeToken } from '../models/code';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  baseUrl: string = environment.baseUrl + 'code';

  constructor(private http: HttpClient) {}

  getCode(code: CodeToken) {
    return this.http.post<CodeToken>(this.baseUrl, code);
  }
}
