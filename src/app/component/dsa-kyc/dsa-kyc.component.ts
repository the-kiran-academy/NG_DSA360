import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from 'src/app/services/kyc-service.service';

@Component({
  selector: 'app-dsa-kyc',
  templateUrl: './dsa-kyc.component.html',
  styleUrls: ['./dsa-kyc.component.scss'],
})
export class DsaKycComponent implements OnInit {
  onaddressProofChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.dsaKyc.addressProof = file;
    }
  }
  onphotographChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.dsaKyc.photograph = file;
    }
  }
  onpanCardChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.dsaKyc.panCard = file;
    }
  }
  onaadharCardChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.dsaKyc.aadharCard = file;
    }
  }
  ondrivingLicenceChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.dsaKyc.drivingLicence = file;
    }
  }
  onPassportChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.dsaKyc.passport = file;
    }
  }

  onbankPassbookChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.dsaKyc.bankPassbook = file;
    }
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private kycService: KycService,
    private router: Router
  ) {}
  dsaKyc = {
    dsaApplicationId: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',

    passport: null,
    drivingLicence: null,
    aadharCard: null,
    panCard: null,
    photograph: null,
    addressProof: null,
    bankPassbook: null,
  };
  ngOnInit(): void {
    this.dsaKyc.dsaApplicationId =
      this.activeRoute.snapshot.paramMap.get('dsaId') ?? '';
  }

  submitKycForm() {
    this.kycService.doDsaKyc(this.dsaKyc).subscribe((response) => {
      alert(response);
      this.router.navigate(['/welcome']);
    });
  }
}
