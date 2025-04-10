import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { SalesSummaryComponent } from "./admin-dashboard-components/sales-summary/sales-summary.component";
import { FeedsComponent } from "./admin-dashboard-components/feeds/feeds.component";
import { TopSellingComponent } from "./admin-dashboard-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./admin-dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./admin-dashboard-components/blog-cards/blog-cards.component";
import { HttpClientModule } from "@angular/common/http";
import { DsaApplicationComponent } from "../admin-subadmin-components/dsa-application/dsa-application.component";
const routes: Routes = [
  {
    path: "",
    data: {
      title: "Admin Dashboard",
      urls: [{ title: "Admin Dashboard", url: "/admin-dashboard" }, { title: "Admin Dashboard" }],
    },
    component: AdminDashboardComponent,
  },

];

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    AdminDashboardComponent,
    SalesSummaryComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    DsaApplicationComponent
  ],

})
export class AdminDashboardModule {}
