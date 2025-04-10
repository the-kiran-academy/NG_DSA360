import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminNavigationComponent } from './admin-dashboard/shared/header/navigation.component';
import { SubAdminNavigationComponent } from './subadmin-dashboard/shared/header/navigation.component';

import { SubAdminSidebarComponent } from './subadmin-dashboard/shared/sidebar/sidebar.component';
import { AdminSidebarComponent } from './admin-dashboard/shared/sidebar/sidebar.component';

import { AdminFullComponent } from './admin-dashboard/admin-layouts/full.component';
import { SubAdminFullComponent } from './subadmin-dashboard/subadmin-layouts/full.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';

import { SpinnerComponent } from './spinner/spinner.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { ServerDownComponent } from './component/server-down/server-down.component';
import { ToastrModule } from 'ngx-toastr';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { SystemUserKycComponent } from './admin-subadmin-components/system-user-kyc/system-user-kyc.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { DsaKycComponent } from './component/dsa-kyc/dsa-kyc.component';
import { DsaRegisterationComponent } from './component/dsa-registration/dsa-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AuthComponent,
    ErrorPageComponent,
    ServerDownComponent,
    ServerErrorComponent,
    SystemUserKycComponent,
    WelcomeComponent,
    DsaKycComponent,
    DsaRegisterationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      enableHtml: true,
      progressBar: true,
    }),
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    AdminFullComponent,
    SubAdminFullComponent,
    AdminNavigationComponent,
    AdminSidebarComponent,
    SubAdminNavigationComponent,
    SubAdminSidebarComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
