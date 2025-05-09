import { Component, OnInit } from '@angular/core';
import { topcard, topcards } from './top-cards-data';
import { SystemUserService } from 'src/app/services/system-user.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards: topcard[];

  constructor(private systemUserService: SystemUserService) {

    this.topcards = topcards;
  }

  ngOnInit(): void {
    this.getMetrics();
  }

  getMetrics() {
    this.systemUserService.dsaUserMetrics().subscribe((res => {
      console.log(res.data);

      this.topcards[0].title = res.data.totalSyatemUsers;
      this.topcards[1].title = res.data.activeSystemUsers;
      this.topcards[2].title = res.data.deactivatedSystemUsers;
      this.topcards[3].title = res.data.newRegistrations.daily;
      this.topcards[4].title = res.data.newRegistrations.monthly;
      this.topcards[5].title = res.data.newRegistrations.weekly;
      this.topcards[6].title = res.data.pendingDsaRegistration;



    }))
  }


}
