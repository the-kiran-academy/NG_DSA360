import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUrls } from '../urls/app.urls';
import { Observable } from 'rxjs';
import { Customer, LoanApplication } from '../holders/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  uploadDocument(formData: FormData, customerId: string): Observable<any> {
    return this.http.post(`${AppUrls.uploadDocument}/${customerId}`, formData, { responseType: 'text' });
  }

  submitLoanApplication(loanApplication: LoanApplication):Observable<any> {

    return this.http.post(`${AppUrls.applyForLoan}`,loanApplication,{ responseType: 'text' })

  }

  constructor(private http: HttpClient) { }

  contactUs(data: any): Observable<any> {
    return this.http.post(AppUrls.contactUs, data, { responseType: 'text' });
  }
  getAgentCustomers(): Observable<Customer[]> {
    const agentId: string = localStorage.getItem('id') || '';
    return this.http.get<Customer[]>(`${AppUrls.agentCustomers}/${agentId}`);
  }
}
