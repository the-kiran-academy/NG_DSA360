import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.scss'],
})
export class AllProfilesComponent implements OnInit {
  profiles: any;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminService.getAllSystemUser().subscribe((response) => {
      this.profiles = response;
      console.log(response);
    });
  }

  retrieveSystemUser(username: any) {
    this.router.navigate([
      '/admin-dashboard/component/update-profile',
      username,
    ]);
  }
}
