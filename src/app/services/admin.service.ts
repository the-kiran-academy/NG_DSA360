import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUrls } from '../urls/app.urls';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<any> {
    return this.http.get<any>(AppUrls.allRolesUrl);
  }

  getAllRegions(): Observable<any> {
    return this.http.get<any>(AppUrls.allRegionsUrl);
  }

  addRole(roleName: any): Observable<any> {
    return this.http.post<any>(AppUrls.addRoleUrl, roleName);
  }

  addRegion(region: any): Observable<any> {
    return this.http.post<any>(AppUrls.addRegionUrl, region);
  }

  getAllSystemUser(): Observable<any> {
    return this.http.get<any>(AppUrls.allUserUrl);
  }

  getSystemUserByUsername(username: any): Observable<any> {
    const url = `${AppUrls.getSystemUserUrl}/${username}`;
    return this.http.get<any>(url);
  }

  getAllDsaIds(): Observable<any> {
    return this.http.get<any>(AppUrls.allDsaApplicationIdsUrl);
  }

  createUserProfile(profile:any):Observable<any>{
    return this.http.post(AppUrls.createUserProfile,profile)
  }
}
