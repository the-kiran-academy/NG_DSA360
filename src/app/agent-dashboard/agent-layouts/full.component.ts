import { CommonModule } from "@angular/common";
import { Component, OnInit, HostListener } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { AgentSidebarComponent } from "../shared/sidebar/sidebar.component";
import { AgentNavigationComponent } from "../shared/header/navigation.component";


//declare var $: any;

@Component({
  selector: "app-agent-full-layout",
  standalone: true,
  imports:[RouterModule, AgentSidebarComponent, AgentNavigationComponent, CommonModule, NgbCollapseModule],
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"],
})
export class AgentFullComponent implements OnInit {

  constructor(public router: Router) {}
  public isCollapsed = false;
  public innerWidth: number = 0;
  public defaultSidebar: string = "";
  public showMobileMenu = false;
  public expandLogo = false;
  public sidebartype = "full";

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate(["/agent-dashboard"]);
    }
    this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = "full";
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType() {
    switch (this.sidebartype) {
      case "full":
        this.sidebartype = "mini-sidebar";
        break;

      case "mini-sidebar":
        this.sidebartype = "full";
        break;

      default:
    }
  }
}
