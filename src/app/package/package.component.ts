import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Package } from '../package';

import { PackageDataService } from './../package-data.service';

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

  constructor(private route: ActivatedRoute, private packageDataService: PackageDataService) { }

  // Submit the HTTP GET request to obtain package information based on the package ID
  getPackage() {
    this.packageDataService.getPackage(this.packageId).subscribe((res: Package) => {
      console.log(res);
      this.pkgInfo = res;
    })
  }

  // On initialization, show package data and monitor URL parameter changes to accurately display information
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.packageId = params.get('packageId');
    })
    this.getPackage();
  }

}
