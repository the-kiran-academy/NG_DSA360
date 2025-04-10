import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './navigation.component.html',
})
export class SubAdminNavigationComponent implements AfterViewInit {

  loggedInUserName: string | null = null;
  constructor(private modalService: NgbModal, private router: Router) {}

  logout() {
    console.log(localStorage.getItem('token'));

    localStorage.removeItem('token'); // Remove the token from localStorage
    this.router.navigate(['/auth']); // Redirect to the login page
  }

  @Output() toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  // This is for Notifications
  ngOnInit(): void {
    this.loggedInUserName = localStorage.getItem('username'); // Update the logged-in user in the navigation component
  }

  ngAfterViewInit() {}
}
