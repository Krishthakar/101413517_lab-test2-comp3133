import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  standalone: true,
  selector: 'app-missionlist',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  // Final list shown on the page
  missions: Mission[] = [];

  // Stores all fetched missions for re-filtering
  allMissions: Mission[] = [];

  constructor(private spacexService: SpacexapiService) {}

  ngOnInit(): void {
    // Fetch all missions on component load
    this.spacexService.getAllMissions().subscribe((data: Mission[]) => {
      this.allMissions = data;
      this.missions = data;
    });
  }

  // Filters missions based on user-selected filters
  onFiltersChanged(filters: {
    year: string;
    launchStatus: string;
    landingStatus: string;
  }): void {
    this.missions = this.allMissions.filter((mission) => {
      const matchesYear = filters.year
        ? mission.launch_year === filters.year
        : true;

      const matchesLaunch =
        filters.launchStatus === 'success'
          ? mission.launch_success === true
          : filters.launchStatus === 'fail'
          ? mission.launch_success === false
          : true;

      const matchesLanding =
        filters.landingStatus === 'success'
          ? mission.rocket?.first_stage?.cores[0]?.land_success === true
          : filters.landingStatus === 'fail'
          ? mission.rocket?.first_stage?.cores[0]?.land_success === false
          : true;

      return matchesYear && matchesLaunch && matchesLanding;
    });
  }
}
