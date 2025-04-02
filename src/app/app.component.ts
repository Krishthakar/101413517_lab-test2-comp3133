import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // ✅ typo fixed here
})
export class AppComponent {
  // App title (used for testing and identification)
  title = '101413517-lab-test2-comp3133';
}
