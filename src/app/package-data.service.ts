import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Package } from './package';

@Injectable({
  providedIn: 'root'
})
export class PackageDataService {

  constructor(private http: HttpClient) { }

  apiURL: string = 'https://backend-dot-package-pal.appspot.com';
  pkg: Package[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getPackage(id: string): Observable<Package[]> {
    const url = `${this.apiURL}/package/${id}`;
    return this.http.get<Package[]>(url, this.httpOptions);
  }

  /**
  getPackage(id: string): Observable<any[]> {
    // might have to use jsonp, instead trying simple get
    const url = `${this.apiURL}/package/${id}`;
    //const url = `${this.apiURL}/package`;
    return this.http.get<any[]>(url, this.httpOptions).subscribe(res => {
      this.pkg = res.json()
      console.log(res);
    })
  }
  */
  
}
