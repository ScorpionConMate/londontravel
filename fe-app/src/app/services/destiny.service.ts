import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root',
})
export class DestinyService {
  baseUrl: string = environment.baseUrl + '/reservations';

  constructor(private http: HttpClient) {}

  createReservation(payload: { destiny: string; school: School }) {
    return this.http.post(this.baseUrl, payload);
  }
}
