import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-missiondetails',
  imports: [CommonModule], // Needed for ngIf usage
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  missionId!: number;
  missionData!: Mission;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexapiService
  ) {}

  ngOnInit(): void {
    // Grab the mission ID from the route and fetch its details
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.missionId = +idParam;
        this.fetchMissionDetails();
      }
    });
  }

  fetchMissionDetails(): void {
    this.spacexService.getMissionById(this.missionId).subscribe((mission: Mission) => {
      this.missionData = mission;
    });
  }
}
