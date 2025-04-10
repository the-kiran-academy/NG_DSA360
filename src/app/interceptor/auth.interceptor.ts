import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    let errorMessage = '';

    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 0) {
          this.router.navigate(['/88a9f70f48d1']);
        }

        if (err.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${err.error.message}`;
          this.toastr.error(errorMessage, 'Error', {
            enableHtml: true,
            positionClass: 'toast-top-right',
          });
        } else {
          // Server-side error
          console.log('errrr', err);

          if (err.error === null) {
            errorMessage = `Error Code: ${err.status}<br>Message: ${err.message}`;
          } else {
            errorMessage = `Error Code: ${err.status}<br>Message: ${err.error.message}`;
          }

          if (err.status === 404) {
            // resource not found
            this.toastr.error(errorMessage, 'Error');
            this.router.navigate(['/3d2bb411-e663']);
          }
          if (err.status === 409) {
            //Resource Already Exists
            this.toastr.warning(errorMessage, 'Warn');
          }
          if (err.status === 400) {
            // bad request
            this.toastr.error(errorMessage, 'Error');
          }
          if (err.status === 403) {
            // Deactivated
            this.toastr.warning(errorMessage, 'Warn');
          }
          if (err.status === 423) {
            // suspended
            this.toastr.warning(errorMessage, 'Warn');
          }

          if (err.status === 401) {
            //unautorized
            if (err.error === null) {
              this.toastr.warning('Session Expire, Please Login Again');
              localStorage.clear();
              this.router.navigate(['/auth']);

            }

            if (err.error.error === 'Unauthorized') {
              this.toastr.warning('Invalid Username');
            }
            if (err.error.message === 'Invalid User Password') {
              this.toastr.warning('Invalid User Password');
            }

          }
          if (err.status === 500) {
            //internal server error
            this.router.navigate(['/server-error']);
            this.toastr.error(errorMessage, 'Error');
          }
        }

        return throwError(errorMessage);
      })
    );
  }
}
