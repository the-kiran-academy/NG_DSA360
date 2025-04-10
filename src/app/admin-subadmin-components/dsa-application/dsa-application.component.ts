import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DsaApplication } from 'src/app/holders/application-data';
import { DsaApplicationService } from 'src/app/services/dsa-application.service';

@Component({
  selector: 'app-dsa-application',
  templateUrl: './dsa-application.component.html',
  styleUrls: ['./dsa-application.component.scss'],
})
export class DsaApplicationComponent implements OnInit {

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
  dsaApplicationId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private dsaService: DsaApplicationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.dsaApplicationId = params.get('dsaApplicationId');
      this.getDsaApplicationById(this.dsaApplicationId);
    });
  }

  getDsaApplicationById(dsaApplicationId: string | null) {
    this.dsaService
      .getDsaApplicationById(dsaApplicationId)
      .subscribe((response) => {
        this.dsaApplication = response;
      });
  }

  sendVerificationEmail(dsaId: string | null): void {
    this.dsaService.emailVerifyNotification(dsaId).subscribe((response) => {
      this.toastr.success(`Verification Email Sent for DSA ID: <br>${dsaId}`);
    });
  }

  submitApprovalStatus() {
    this.dsaService
      .dsaApplicationApprovalNotification(this.dsaApplication.dsaApplicationId, this.dsaApplication.approvalStatus)
      .subscribe();
    this.toastr.success(
      'Notification has been sent to user : ' + this.dsaApplicationId
    );
    }

}
