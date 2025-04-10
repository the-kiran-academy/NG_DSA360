import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DsaApplication } from '../holders/application-data';
import { AppUrls } from '../urls/app.urls';

@Injectable({
  providedIn: 'root',
})
export class DsaApplicationService {
  constructor(private http: HttpClient) {}

  getAllDsaApplications(): Observable<any> {
    return this.http.get<any>(AppUrls.allDsaApplicationUrl);
  }

  getDsaApplicationById(
    dsaApplicationId: string | null
  ): Observable<DsaApplication> {
    const url = `${AppUrls.getDsaApplication}/${dsaApplicationId}`;
    return this.http.get<DsaApplication>(url);
  }

  emailVerifyNotification(dsaApplicationId: string | null): Observable<any> {
    const url = `${AppUrls.emailVerification}/${dsaApplicationId}`;

    console.log('url', url);

    return this.http.get<any>(url, { responseType: 'json' });
  }

  dsaApplication(dsaApplication: any): Observable<any> {
    return this.http.post(AppUrls.dsaApplication, dsaApplication);
  }
  dsaApplicationApprovalNotification(dsaId: any, approvalStatus: any) {
      const params = new HttpParams()
        .set('id', dsaId)
        .set('approvalStatus', approvalStatus)
        .set('type', 'application');
      return this.http.get<any>(AppUrls.approvalNotification, { params });
    }
}
