import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * SearchResultsComponent is navigated to once a user
 * enters in a search query in the NavbarComponent. The
 * search results page will display relevant data from
 * the API through an HTTP GET request containing
 * the search qeury.
 */
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query: string;

  constructor(private route: ActivatedRoute) { }

  // Monitor changes in the URL parameters to display correct search information
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query');
    })
  }

}
