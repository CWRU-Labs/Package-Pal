import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageDataService } from './../package-data.service';
import { Package } from '../package';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  checkOutDisabled: boolean = false;
  finished: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private packageDataService: PackageDataService,
    private router: Router, 
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    // On URL parameter change, refresh data
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  // Get the shared package info
  get pkgInfo() {
    return this.packageDataService.pkg;
  }

  // Set the shared package info
  set pkgInfo(value) {
    this.packageDataService.pkg = value;
  }

  // Submit the HTTP GET request to obtain package information based on the package ID
  getPackage() {
    this.packageDataService.getPackage(this.packageId).subscribe((res: Package) => {
      this.pkgInfo = res;
      // Disable all fields if the package is already checked out
      if (this.pkgInfo.dateTimeOut != null) {
        this.checkOutDisabled = true;
        this.recipientDisabled = true;
        this.addressDisabled = true;
        this.storageLocationDisabled = true;
        this.descriptionDisabled = true;
      }
      // Disable specific fields if package has been checked in and confirmed
      if (this.pkgInfo.description != "") {
        this.recipientDisabled = true;
        this.addressDisabled = true;
      }
      this.finished = true;
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
    this.packageDataService.updatePackage(this.pkgInfo).subscribe(res => {
      this.getPackage();
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

  // Open the dialog for confirming package checkout
  openDialog() {
    const dialogRef = this.dialog.open(PackageDialogComponent, {
      data: {
        pkg: this.pkgInfo,
        pkgService: this.packageDataService,
        router: this.router
      }
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

// Dialog box for confirming package checkout
@Component({
  selector: 'app-package-dialog',
  templateUrl: './package-dialog.component.html',
})
export class PackageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PackageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // If user selects 'no'
  onNoClick() {
    this.dialogRef.close();
  }

  // Fire the HTTP request to delete the package from the database if user selects 'yes' and navigate home
  onYesClick() {
    this.data.pkgService.checkOutPackage(this.data.pkg.id).subscribe(res => {
      this.dialogRef.close();
      this.data.router.navigate([`/home`]);
    })
  }
}