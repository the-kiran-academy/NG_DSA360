import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AppUrls } from '../urls/app.urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  username: string = '';
  userRoles: any;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  login(username: string, password: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    this.username = username;
    return this.http.post<any>(AppUrls.loginUrl, {}, { params }).pipe(
      tap((response) => this.handleLoginResponse(response)),
      catchError(this.handleError<any>('login'))
    );
  }

  private handleLoginResponse(response: any): void {
    const token = response.token;

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('username', this.username);
    } else {
      this.toastr.error('Facing TokenGenration Issues !');
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getLogedInUserRoles():Observable<any>{

    return this.userRoles;
  }

  logout(): void {
    localStorage.clear();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }
}
