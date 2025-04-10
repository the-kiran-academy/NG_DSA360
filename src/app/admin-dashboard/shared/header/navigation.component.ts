import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SystemUserService } from 'src/app/services/system-user.service';
import { MyProfileComponent } from '../../../admin-component/my-profile/my-profile.component';

declare var $: any;

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule],
  templateUrl: './navigation.component.html',
})
export class AdminNavigationComponent implements AfterViewInit {
  userProfile: any;

  loggedInUserName: string | null = null;
  constructor(
    private router: Router,
    private authService: AuthService,
    private systemUserService: SystemUserService
  ) {}

  ngOnInit(): void {
    this.loggedInUserName = localStorage.getItem('username'); // Update the logged-in user in the navigation component
  }

  onMyProfileClick(username: any): void {
    this.router.navigate(['/admin-dashboard/component/my-profile', username]);
  }

  logout() {
    localStorage.removeItem('token'); // Remove the token from localStorage
    localStorage.removeItem('token');
    this.router.navigate(['']); // Redirect to the login page
  }

  @Output() toggleSidebar = new EventEmitter<void>();

  public showSearch = false;



  ngAfterViewInit() {}
}
