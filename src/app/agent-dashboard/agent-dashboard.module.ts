import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { AgentDashboardComponent } from "./agent-dashboard.component";
import { SalesSummaryComponent } from "./agent-dashboard-components/sales-summary/sales-summary.component";
import { FeedsComponent } from "./agent-dashboard-components/feeds/feeds.component";
import { TopSellingComponent } from "./agent-dashboard-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./agent-dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./agent-dashboard-components/blog-cards/blog-cards.component";
import { HttpClientModule } from "@angular/common/http";
const routes: Routes = [
  {
    path: "",
    data: {
      title: "Agent Dashboard",
      urls: [{ title: "Agent Dashboard", url: "/agent-dashboard" }, { title: "Agent Dashboard" }],
    },
    component: AgentDashboardComponent,
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
    AgentDashboardComponent,
    SalesSummaryComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
  ],

})
export class AgentDashboardModule {}
