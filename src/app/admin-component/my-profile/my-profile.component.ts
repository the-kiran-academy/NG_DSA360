import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { SystemUserService } from 'src/app/services/system-user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  logedInUserRoles: string[] = [];
  isAdmin: boolean = false;

  allRegions: any;

  username: any;
  userProfile: any = {
    roles: [{ name: '' }],
    dsaApplicationId: { dsaApplicationId: '' },
  };

  userprofile = {
    questions: [
      'What is your favorite color?',
      'What was the name of your first pet?',
      'What is your mother’s maiden name?',
    ],
  };
  securityQuestions: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private systemUserService: SystemUserService,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('username');
      this.getUserProfile(this.username);
    });
  }

  getUserProfile(username: any): void {
    const a = this.authService.getLogedInUserRoles();
    this.isAdmin = Array.isArray(a) && a.includes('ADMIN');
    this.systemUserService.getUserProfile(username).subscribe((response) => {
      this.userProfile = response;
    });
  }

  getAllRegions() {
    this.adminService.getAllRegions().subscribe((response) => {
      this.allRegions = response;
    });
  }

  onSubmit(): void {
    console.log(this.userProfile);
  }


  onQuestionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedQuestion = selectElement.value;

    this.userProfile.question = selectedQuestion;
  }
}
