import { Routes } from '@angular/router';

import { AgentDashboardComponent } from '../agent-dashboard/agent-dashboard.component';
import { AgentCustomersComponent } from './agent-customers/agent-customers.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agent-dashboard',
        component: AgentDashboardComponent,
      },

      {
        path:'agent-customers',
        component:AgentCustomersComponent
      },


    ],
  },
];
