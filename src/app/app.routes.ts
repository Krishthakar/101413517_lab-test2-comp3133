import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

// Route config for the SpaceX Mission app
export const routes: Routes = [
  { path: '', component: MissionlistComponent },               // Homepage → mission list
  { path: 'mission/:id', component: MissiondetailsComponent }, // Dynamic route → mission details
  { path: '**', redirectTo: '' }                               // Fallback route → redirect to homepage
];
