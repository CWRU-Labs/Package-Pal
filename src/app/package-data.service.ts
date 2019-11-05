import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Package } from './package';

/**
 * PackageDataService holds the methods for handling API calls
 * and data pertaining to a specific package. It can receive the
 * package information using an HTTP GET request by any injecting
 * components that utilize it.
 */
@Injectable({
  providedIn: 'root'
})
export class PackageDataService {

  constructor(private http: HttpClient) { }

  private apiURL: string = 'https://backend-dot-package-pal.appspot.com';

  // Current package for package page
  pkg: Package;

  // List of recent specified number of packages listed in the database
  recents: Package[];

  // List of packages returned from search query
  results: Package[];

  // Set HTTP headers for API handling
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HTTP GET request usuing the API URL and HTTP options for retrieving package information based on package ID
  getPackage(id: string) {
    const url = `${this.apiURL}/package/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  // HTTP GET request using the API URL and HTTP options for retrieving the last "count" number of packages inputted in the database
  getRecent(count: number) {
    const url = `${this.apiURL}/recents/${count}`;
    return this.http.get(url, this.httpOptions);
  }

  // HTTP GET request for returning search results based on inputted query
  getSearchResults(query: string) {
    const url = `${this.apiURL}/search/${query}`;
    return this.http.get(url, this.httpOptions);
  }
}