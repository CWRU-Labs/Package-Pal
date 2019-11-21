import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageDataService } from './../package-data.service';
import { Package } from '../package';

/**
 * PackageComponent represents the package page
 * which is navigated to by the user uploading
 * a package label or selecting a package from
 * the search results page.
 */
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packageId: string;
  
  // Get the shared package info
  get pkgInfo() {
    return this.packageDataService.pkg;
  }

  // Set the shared package info
  set pkgInfo(value) {
    this.packageDataService.pkg = value;
  }

  constructor(private route: ActivatedRoute, private packageDataService: PackageDataService, private router: Router) {
    // On URL parameter change, refresh data
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  // Submit the HTTP GET request to obtain package information based on the package ID
  getPackage() {
    this.packageDataService.getPackage(this.packageId).subscribe((res: Package) => {
      this.pkgInfo = res;
    },
    error => {
      console.log('There was an error white retrieving package information' + error);
    });
  }

  // On initialization, show package data and monitor URL parameter changes to accurately display information
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.packageId = params.get('packageId');
    });
    this.getPackage();
  }

}