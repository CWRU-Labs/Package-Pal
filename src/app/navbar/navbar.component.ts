import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

/**
 * NavbarComponent is shown at every point in the
 * GUI. It allows for navigation and easy access
 * to the search function, which is included in this
 * component.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  
  value: string

  // Navigate to the search results page with the query entered by the user
  onEnter(value: string) {
    this.router.navigate([`/search/${value}`]);
  }

  ngOnInit() {
  }

}
