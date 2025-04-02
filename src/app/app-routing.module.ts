import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

// Define routes for the app
const routes: Routes = [
  { path: '', component: MissionlistComponent },             // Home route → Mission list
  { path: 'mission/:id', component: MissiondetailsComponent }, // Dynamic route → Specific mission
  { path: '**', redirectTo: '' }                             // Wildcard fallback → redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
