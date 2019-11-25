import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Package } from './package';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  getPackage(id: string): Observable<Package> {
    const url = `${this.apiURL}/package/${id}`;
    return this.http.get<Package>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // HTTP GET request using the API URL and HTTP options for retrieving the last "count" number of packages inputted in the database
  getRecent(count: number): Observable<Package[]> {
    const url = `${this.apiURL}/recents/${count}`;
    return this.http.get<Package[]>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // HTTP GET request for returning search results based on inputted query
  getSearchResults(query: string): Observable<Package[]> {
    const url = `${this.apiURL}/search/${query}`;
    return this.http.get<Package[]>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // HTTP PUT request for updating a package after user edit on the package page
  updatePackage(updatedPackage: Package): Observable<Package> {
    const url = `${this.apiURL}/update/${updatedPackage.id}`;
    return this.http.put<Package>(url, updatedPackage).pipe(
      catchError(this.handleError)
    );
  }

  // Handle any error thrown by above HTTP requests
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // a client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // the backend returned an unsuccessful response code - the response body may contain clues as to what went wrong
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}