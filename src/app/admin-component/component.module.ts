import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { AllSystemUserKycComponent } from '../admin-subadmin-components/all-system-user-kyc/all-system-user-kyc.component';
import { CreateNewProfileComponent } from './create-new-profile/create-new-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { HomeEmiCalculatorComponent } from '../component/home-emi-calculator/home-emi-calculator.component';
import { BussinessEmiCalculatorComponent } from '../component/bussiness-emi-calculator/bussiness-emi-calculator.component';
import { PersonalEmiCalculatorComponent } from '../component/personal-emi-calculator/personal-emi-calculator.component';
import { CarEmiCalculatorComponent } from '../component/car-emi-calculator/car-emi-calculator.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { AllRolesComponent } from './all-roles/all-roles.component';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { ManageInterestRateComponent } from './manage-interest-rate/manage-interest-rate.component';
import { CommisionStructureComponent } from './commision-structure/commision-structure.component';
import { AllDsaApplicationComponent } from '../admin-subadmin-components/all-dsa-applications/all-dsa-application.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgApexchartsModule



  ],
  declarations: [
    AllSystemUserKycComponent,
         CreateNewProfileComponent,
         AllProfilesComponent,
         HomeEmiCalculatorComponent,
         BussinessEmiCalculatorComponent,
         PersonalEmiCalculatorComponent,
         CarEmiCalculatorComponent,
         MyProfileComponent,
         AccountSettingComponent,
         AllRolesComponent,
         AllRegionsComponent,
         ManageInterestRateComponent,
         CommisionStructureComponent,

         AllDsaApplicationComponent,
         CreateNewProfileComponent,
         AllProfilesComponent,
         AllSystemUserKycComponent,

         HomeEmiCalculatorComponent,
         BussinessEmiCalculatorComponent,
         PersonalEmiCalculatorComponent,
         CarEmiCalculatorComponent,

         MyProfileComponent,
         AccountSettingComponent,
         UpdateProfileComponent,

  ],
})
export class AdminComponentsModule { }
