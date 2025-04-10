import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { SubAdminDashboardComponent } from "./subadmin.dashboard.component";
import { SalesSummaryComponent } from "./subadmin-dashboard-components/sales-summary/sales-summary.component";
import { FeedsComponent } from "./subadmin-dashboard-components/feeds/feeds.component";
import { TopSellingComponent } from "./subadmin-dashboard-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./subadmin-dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./subadmin-dashboard-components/blog-cards/blog-cards.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "SubAdmin Dashboard",
      urls: [{ title: "Sub Admin Dashboard", url: "/sub-admin-dashboard" }, { title: "Sub Admin Dashboard" }],
    },
    component: SubAdminDashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    SubAdminDashboardComponent,
    SalesSummaryComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent
  ],
})
export class SubAdminDashboardModule {}
