import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  username: string = '';
  password: string = '';

  userRoles: string[] = []; // Will hold roles after successful login
  selectedRole: string = ''; //initially no role
  //  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login(): void {
    this.authService
      .login(this.username, this.password)
      .subscribe((response) => {
        if (this.authService.isLoggedIn()) {
          this.userRoles = response.roles;
          console.log(this.userRoles);

          if (this.userRoles.length > 1) {
            this.showRoleSelectionPrompt();
          } else if (this.userRoles.length === 1) {
            this.navigateToDashboard(this.userRoles[0]);
          } else {
            // Handle the case where no roles are returned
            alert('No roles assigned to the user.');
            this.navigateToDashboard("norole");
          }
        }
      });
  }
  navigateToDashboard(role: string) {
    switch (role) {
      case 'ADMIN':
        this.router.navigate(['/admin-dashboard']).then(() => {
          window.location.reload(); // Forces a full page reload
        });
        break;
      case 'SUB_ADMIN':
        this.router.navigate(['/sub-admin-dashboard']).then(() => {
          window.location.reload();
        });
        break;
      case 'AGENT':
        this.router.navigate(['/agent-dashboard']).then(() => {
          window.location.reload();
        });
        break;
      default:
        this.router.navigate(['/welcome']).then(() => {
          window.location.reload();
        });
    }
  }


  onRoleSubmit() {
    if (this.selectedRole) {
      this.navigateToDashboard(this.selectedRole);
    } else {
      alert('Please select a role to proceed.');
    }
  }


  showRoleSelectionPrompt() {
    Swal.fire({
      title: 'Select the Dashboard',
      input: 'radio',
      inputOptions: this.userRoles.reduce((options, role) => {
        options[role] = role;
        return options;
      }, {} as Record<string, string>),
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            this.navigateToDashboard(value);
            resolve('');
          } else {
            resolve('You need to choose a role!');
          }
        });
      },
      confirmButtonText: 'Go to Dashboard',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
    });
  }
}
