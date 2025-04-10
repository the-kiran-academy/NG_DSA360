import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KycService } from 'src/app/services/kyc-service.service';

@Component({
  selector: 'app-all-system-user-kyc',
  templateUrl: './all-system-user-kyc.component.html',
  styleUrls: ['./all-system-user-kyc.component.scss'],
})
export class AllSystemUserKycComponent implements OnInit {
  dsaKycs: any;

  constructor(private kycService: KycService, private router: Router) {}

  ngOnInit(): void {
    this.kycService.getAllDsaKycs().subscribe((response) => {
      this.dsaKycs = response;
    });
  }

  retrieveKyc(dsaId: string):void {
    console.log(dsaId);

    this.router.navigate([
      '/admin-dashboard/component/dsa-kyc-by-dsaid',
      dsaId,
    ]);
  }
}
