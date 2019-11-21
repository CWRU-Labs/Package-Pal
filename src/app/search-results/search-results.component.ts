import { PackageDataService } from './../package-data.service';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
export class SearchResultsComponent implements OnInit, OnDestroy {
  query: string;

  constructor(private route: ActivatedRoute, private packageDataService: PackageDataService, private router: Router) {
    // On URL parameter change (or new search from search bar), refresh data table
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  audio = new Audio();

  get searchResults() {
    return this.packageDataService.results;
  }

  set searchResults(value) {
    this.packageDataService.results = value;
  }

  // Subscribe to (fire) the HTTP GET request for the search query for a package and store its response for HTML template display
  search() {
    this.packageDataService.getSearchResults(this.query).subscribe(result => {
      let resultValues: any = Object.values(result);
      console.log(resultValues);
      if (resultValues[5] == -1) {
        this.searchResults = null;
      } else {
        this.searchResults = resultValues;
      }
    })
  }

  redirectToPackage(id: number) {
    this.router.navigate([`/package/${id}`]);
  }

  // Monitor changes in the URL parameters to display correct search information
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query');
      
    })
    if (this.query == "Play Lament") {
      this.audio.src = "./../../assets/Lament_Golden_Light.mp3";
      this.audio.load();
      this.audio.play();
    }
    this.search();
  }

  ngOnDestroy() {
    this.audio.pause();
  }

}
