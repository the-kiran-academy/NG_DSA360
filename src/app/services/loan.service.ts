import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUrls } from '../urls/app.urls';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

  createLoanCondition(loanCondition:any): Observable<any> {
    return this.http.post(AppUrls.createLoanCondition,loanCondition);
  }
}
