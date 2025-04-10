import { Component, OnInit } from '@angular/core';

import {
  AllDsaApplications,
  DsaApplication,
} from '../../holders/application-data';
import { DsaApplicationService } from '../../services/dsa-application.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-dsa-application',
  templateUrl: './all-dsa-application.component.html',
  styleUrls: ['./all-dsa-application.component.scss'],
})
export class AllDsaApplicationComponent implements OnInit {
  dataTable: any;
  dsaApplications: AllDsaApplications[] | undefined;

  dsaApplication: DsaApplication | undefined;

  constructor(
    private dsaService: DsaApplicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dsaService.getAllDsaApplications().subscribe((response) => {
      this.dsaApplications = response;
    });
  }



  retrieveDsa(dsaApplicationId: string): void {
    this.router.navigate([
      '/admin-dashboard/component/dsa-application',
      dsaApplicationId,
    ]);
  }
}
