import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,private router:Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (this.authService.isLoggedIn()) {
     let role=  response.roles[0];
        if(role==='ADMIN'){
          this.router.navigate(['/admin-dashboard']);
        }
        else if(role==='SUB_ADMIN'){
          this.router.navigate(['/sub-admin-dashboard']);
        }




      } else {
        this.errorMessage = 'Login failed. Please check your credentials and try again.';
      }
    });
  }
}
