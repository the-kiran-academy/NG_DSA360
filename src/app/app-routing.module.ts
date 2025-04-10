import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './component/auth/auth.component';
import { SubAdminFullComponent } from './subadmin-dashboard/subadmin-layouts/full.component';
import { AdminFullComponent } from './admin-dashboard/admin-layouts/full.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { ServerDownComponent } from './component/server-down/server-down.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { DsaKycComponent } from './component/dsa-kyc/dsa-kyc.component';
import { DsaRegisterationComponent } from './component/dsa-registration/dsa-registration.component';

export const Approutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Default route
  { path: 'auth', component: AuthComponent },
  { path: 'welcome', component: WelcomeComponent }, // Route to AuthComponent

  { path: 'dsa-registeration', component: DsaRegisterationComponent },
  {
    path:"dsa-kyc/:dsaId",component:DsaKycComponent
  },
  { path: '88a9f70f48d1', component: ServerDownComponent },
  { path: 'server-error', component: ServerErrorComponent },

  //admin
  {
    path: 'admin-dashboard',
    component: AdminFullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin-dashboard/admin-dashboard.module').then(
            (m) => m.AdminDashboardModule
          ),
      },

      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'component',
        loadChildren: () =>
          import('./admin-component/component.module').then(
            (m) => m.AdminComponentsModule
          ),
      },
    ],
  },

  // subadmin
  {
    path: 'sub-admin-dashboard',
    component: SubAdminFullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./subadmin-dashboard/subadmin.dashboard.module').then(
            (m) => m.SubAdminDashboardModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'component',
        loadChildren: () =>
          import('./subadmin-component/component.module').then(
            (m) => m.SubAdminComponentsModule
          ),
      },
    ],
  },
  { path: '3d2bb411-e663', component: ErrorPageComponent },
  { path: '**', redirectTo: '/3d2bb411-e663' },
];
