import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DsaKyc } from 'src/app/holders/application-data';
import { KycService } from 'src/app/services/kyc-service.service';

@Component({
  selector: 'app-system-user-kyc',
  templateUrl: './system-user-kyc.component.html',
  styleUrls: ['./system-user-kyc.component.scss'],
})
export class SystemUserKycComponent implements OnInit {
  approvalStatus: any;

  dsaApplicationId!: string | null;
  dsaKyc: DsaKyc ={
    dsaKycId: '',
    dsaApplicationId: {
      dsaApplicationId: ''
    },
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    passport: '',
    drivingLicence: '',
    aadharCard: '',
    panCard: '',
    photograph: '',
    addressProof: '',
    bankPassbook: '',
    approvalStatus: '',
    attempt: 0
  }
  constructor(
    private route: ActivatedRoute,
    private kycService: KycService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.dsaApplicationId = param.get('dsaId');
      this.getSystemUserKycByDsaId(this.dsaApplicationId);
    });
  }

  getDsaById(dsaApplicationId: string) {
    this.router.navigate([
      '/admin-dashboard/component/dsa-application',
      dsaApplicationId,
    ]);
  }

  getSystemUserKycByDsaId(dsaApplicationId: string | null) {
    this.kycService.getKycById(dsaApplicationId).subscribe((response) => {
      this.dsaKyc = response;
    });
  }

  submitApprovalStatus() {
    this.kycService
      .kycApprovalNotification(this.dsaKyc.dsaKycId, this.approvalStatus)
      .subscribe();
    this.toastr.success(
      'Notification has been sent to user : ' + this.dsaApplicationId
    );
  }
}
