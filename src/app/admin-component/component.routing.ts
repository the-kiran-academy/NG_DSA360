import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AllRolesComponent } from './all-roles/all-roles.component';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { ManageInterestRateComponent } from './manage-interest-rate/manage-interest-rate.component';
import { CommisionStructureComponent } from './commision-structure/commision-structure.component';
import { AllDsaApplicationComponent } from '../admin-subadmin-components/all-dsa-applications/all-dsa-application.component';
import { CreateNewProfileComponent } from './create-new-profile/create-new-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { AllSystemUserKycComponent } from '../admin-subadmin-components/all-system-user-kyc/all-system-user-kyc.component';
import { HomeEmiCalculatorComponent } from './home-emi-calculator/home-emi-calculator.component';
import { BussinessEmiCalculatorComponent } from './bussiness-emi-calculator/bussiness-emi-calculator.component';
import { PersonalEmiCalculatorComponent } from './personal-emi-calculator/personal-emi-calculator.component';
import { CarEmiCalculatorComponent } from './car-emi-calculator/car-emi-calculator.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { DsaApplicationComponent } from '../admin-subadmin-components/dsa-application/dsa-application.component';
import { SystemUserKycComponent } from '../admin-subadmin-components/system-user-kyc/system-user-kyc.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },

      {
        path: 'all-role',
        component: AllRolesComponent,
      },

      {
        path: 'all-region',
        component: AllRegionsComponent,
      },
      {
        path: 'manage-interest-rates',
        component: ManageInterestRateComponent,
      },
      {
        path: 'commision-structure',
        component: CommisionStructureComponent,
      },

      // header

      {
        path: 'all-dsa-applications',
        component: AllDsaApplicationComponent,
      },

      {
        path: 'create-new-profile',
        component: CreateNewProfileComponent,
      },
      {
        path: 'all-profiles',
        component: AllProfilesComponent,
      },

      {
        path: 'system-user-kyc',
        component: AllSystemUserKycComponent,
      },

      //loan
      {
        path: 'home-loan-calculator',
        component: HomeEmiCalculatorComponent,
      },

      {
        path: 'bussiness-loan-calculator',
        component: BussinessEmiCalculatorComponent,
      },

      {
        path: 'personal-loan-calculator',
        component: PersonalEmiCalculatorComponent,
      },

      {
        path: 'car-loan-calculator',
        component: CarEmiCalculatorComponent,
      },

      //my profile
      {
        path: 'my-profile/:username',
        component: MyProfileComponent,
      },

      //update other user profile
      {
        path: 'update-profile/:username',
        component: UpdateProfileComponent,
      },



      {
        path: 'account-setting',
        component: AccountSettingComponent,
      },

      //single dsa
      {
        path: 'dsa-application/:dsaApplicationId',
        component: DsaApplicationComponent,
      },

      {
        path: 'system-user/:username',
        component: MyProfileComponent,
      },
      {
        path:'dsa-kyc-by-dsaid/:dsaId',
        component:SystemUserKycComponent
      }
    ],
  },
];
