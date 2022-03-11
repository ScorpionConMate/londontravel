import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  baseUrl: string = environment.baseUrl + '/reservations';

  constructor(private http: HttpClient) {}

  getMyReservations(token: string) {
    return this.http.get(this.baseUrl + '/my-reservations', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  getMyRooms(token: string, code: string) {
    return this.http.get(this.baseUrl + code + '/get-rooms', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
}
