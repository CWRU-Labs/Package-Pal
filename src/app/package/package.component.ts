import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageDataService } from './../package-data.service';
import { Package } from '../package';

import { MatSnackBar } from '@angular/material/snack-bar';

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
  step = 0;

  // Booleans for allowing modification of form fields
  recipientDisabled: boolean;
  addressDisabled: boolean;
  storageLocationDisabled: boolean;
  descriptionDisabled: boolean;
  
  // Get the shared package info
  get pkgInfo() {
    return this.packageDataService.pkg;
  }

  // Set the shared package info
  set pkgInfo(value) {
    this.packageDataService.pkg = value;
  }

  constructor(private route: ActivatedRoute, private packageDataService: PackageDataService, private router: Router, private _snackBar: MatSnackBar) {
    // On URL parameter change, refresh data
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  // Submit the HTTP GET request to obtain package information based on the package ID
  getPackage() {
    this.packageDataService.getPackage(this.packageId).subscribe((res: Package) => {
      //console.log(res);
      this.pkgInfo = res;
    },
    error => {
      console.log('There was an error retrieving package information: ' + error);
    });
  }

  // Set the step for the expansion panel
  setStep(index: number) {
    this.step = index;
  }

  // Iterate to next expansion panel
  nextStep() {
    this.step++;
  }

  // Iterate to previous expansion panel
  prevStep() {
    this.step--;
  }

  // Submit the changes to the data to to the API to update DB fields
  onSubmit() {
    // Might need to send an actual package object and NOT formdata of individual fields. Research.
    console.log(this.pkgInfo)

    this.packageDataService.updatePackage(this.pkgInfo).subscribe(res => {
      console.log(res);
      this._snackBar.open('Updated successfully.', 'OK', {
        duration: 2000,
        panelClass: ['snackbar-style'],
      });
    },
    error => {
      this._snackBar.open('Update failed: ' + error, 'OK', {
        duration: 5000,
        panelClass: ['snackbar-style'],
      });
    });
  }

  // Fire the HTTP request to delete the package from the database
  onCheckOut() {
    console.log('implement package delete');
  }

  // On initialization, show package data and monitor URL parameter changes to accurately display information
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.packageId = params.get('packageId');
    });
    this.getPackage();
  }

}