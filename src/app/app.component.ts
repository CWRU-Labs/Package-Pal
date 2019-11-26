import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Base component of the program. Initializes the program
 * for loading, and supplies app-root selector for displaying
 * the initial templates.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'package-pal';
  constructor(public router: Router) { }
}
