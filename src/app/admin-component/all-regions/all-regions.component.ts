import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.scss'],
})
export class AllRegionsComponent implements OnInit {
  regions: any;
  showAddRegionForm = false;

  regionName = '';
  regionCode = '';

  region!: {
    regionName: string;
    regionCode: string;
  };

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.adminService.getAllRegions().subscribe((response) => {
      this.regions = response;
    });
  }

  addRegion() {
    const newRegion = {
      regionName: this.regionName,
      regionCode: this.regionCode.toUpperCase(),
    };

    //service call
    this.adminService.addRegion(newRegion).subscribe((response) => {

      if(response!=null){
        this.toastr.success('Region Added Successfully !');
      }

    });

    //clear form
    this.regionCode = '';
    this.regionName = '';
    this.showAddRegionForm = false;
  }
}
