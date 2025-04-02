import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  standalone: true,
  selector: 'app-missionfilter',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent {
  // Filter input values
  launchYear: string = '';
  launchStatus: string = '';
  landingStatus: string = '';

  // Emit whenever a filter changes
  @Output() filtersChanged = new EventEmitter<{
    year: string;
    launchStatus: string;
    landingStatus: string;
  }>();

  // Called when any input or radio option is updated
  onYearChange() {
    this.filtersChanged.emit({
      year: this.launchYear,
      launchStatus: this.launchStatus,
      landingStatus: this.landingStatus
    });
  }

  // Resets all filters to default
  resetFilter() {
    this.launchYear = '';
    this.launchStatus = '';
    this.landingStatus = '';

    this.filtersChanged.emit({
      year: '',
      launchStatus: '',
      landingStatus: ''
    });
  }
}
