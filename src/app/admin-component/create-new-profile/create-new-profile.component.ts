import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { DsaApplicationService } from 'src/app/services/dsa-application.service';
import { SystemUserService } from 'src/app/services/system-user.service';
import {
  DsaApplication,
  UserProfile,
  Role,
} from '../../holders/application-data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-new-profile',
  templateUrl: './create-new-profile.component.html',
  styleUrls: ['./create-new-profile.component.scss'],
})
export class CreateNewProfileComponent implements OnInit {
  dsaApplicationIds: [] = [];
  dsaApplication: DsaApplication = {
    dsaApplicationId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    contactNumber: '',
    emailAddress: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    preferredLanguage: '',
    educationalQualifications: '',
    experience: '',
    isAssociatedWithOtherDSA: false,
    associatedInstitutionName: '',
    referralSource: '',
    approvalStatus: '',
    emailVerified: false,
  };

  userProfile: UserProfile = {
    answer: '',
    dsaApplicationId: '',
    password: '',
    question: '',
    regions: [],
    roles: [],
    statusReason: 'kyc done',
    username: '',
  };

  roles = [
    {
      id: '',
      name: '',
    },
  ];

  regions = [
    {
      id: '',
      regionName: '',
      regionCode: '',
    },
  ];

  questions = [
    'What is your favorite color?',
    'What was the name of your first pet?',
    'What is your mother’s maiden name?',
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private systemUserService: SystemUserService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private dsaService: DsaApplicationService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.adminService.getAllDsaIds().subscribe((response) => {
      this.dsaApplicationIds = response;

      this.adminService.getAllRoles().subscribe((response) => {
        this.roles = response;
      });

      this.adminService.getAllRegions().subscribe((resonse) => {
        this.regions = resonse;
      });
    });
  }

  onSubmit() {
    this.userProfile.roles = this.selectedRoles;
    this.userProfile.regions = this.selectedRegions;

    this.adminService
      .createUserProfile(this.userProfile)
      .subscribe((response) => {
        this.toaster.success('Profile Created Successfully');

        this.router.navigate(['/admin-dashboard/component/all-profiles']);
      });
  }

  onDsaApplicationChange(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.dsaService.getDsaApplicationById(selectedId).subscribe((response) => {
      this.dsaApplication = response;
    });
  }

  dropdownSizeRegion: number = 1;
  dropdownSizeRole: number = 1;

  selectedRegions: string[] = [];
  selectedRoles: string[] = [];
  expandDropdownRegion(): void {
    this.dropdownSizeRegion = this.userProfile.regions.length;
  }

  collapseDropdownRegion(): void {
    this.dropdownSizeRegion = 1;
  }

  expandDropdownRole(): void {
    this.dropdownSizeRole = this.userProfile.roles.length;
  }

  collapseDropdownRole(): void {
    this.dropdownSizeRole = 1;
  }
}
