import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AppUrls } from '../urls/app.urls';

@Injectable({
  providedIn: 'root',
})
export class SystemUserService {


  constructor(private http: HttpClient) {

  }

  getUserProfile(username: string): Observable<any> {
    const url = `${AppUrls.myProfileApiUrl}/${username}`;

    return this.http.get<any>(url);
  }
}
