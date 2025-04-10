import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUrls } from '../urls/app.urls';

@Injectable({
  providedIn: 'root',
})
export class KycService {
  constructor(private http: HttpClient) {}

  getAllDsaKycs(): Observable<any> {
    return this.http.get<any>(AppUrls.allDsaKyc);
  }

  getKycById(dsaId: any): Observable<any> {
    const url = `${AppUrls.getKycByDsaId}/${dsaId}`;
    return this.http.get<any>(url);
  }

  kycApprovalNotification(kycId: any, approvalStatus: any) {
    const params = new HttpParams()
      .set('id', kycId)
      .set('approvalStatus', approvalStatus)
      .set('type', 'kyc');
    return this.http.get<any>(AppUrls.approvalNotification, { params });
  }

  doDsaKyc(dsaKyc: any): Observable<string> {
    const formData = new FormData();

    formData.append('dsaApplicationId', dsaKyc.dsaApplicationId);
    formData.append('bankName', dsaKyc.bankName);
    formData.append('accountNumber', dsaKyc.accountNumber);
    formData.append('ifscCode', dsaKyc.ifscCode);

    formData.append('passport', dsaKyc.passport);
    formData.append('drivingLicence', dsaKyc.drivingLicence);
    formData.append('aadharCard', dsaKyc.aadharCard);
    formData.append('panCard', dsaKyc.panCard);
    formData.append('photograph', dsaKyc.photograph);
    formData.append('addressProof', dsaKyc.addressProof);
    formData.append('bankPassbook', dsaKyc.bankPassbook);

    return this.http.post<any>(AppUrls.dsaKyc, formData,{responseType: 'text' as 'json'});
  }

}
