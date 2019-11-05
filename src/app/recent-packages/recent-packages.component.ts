import { PackageDataService } from './../package-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-packages',
  templateUrl: './recent-packages.component.html',
  styleUrls: ['./recent-packages.component.css']
})
export class RecentPackagesComponent implements OnInit {

  constructor(private packageDataService: PackageDataService) { }

  // Get the recent packages list
  get recentPackages() {
    return this.packageDataService.recents;
  }

  // Set the recent packages list
  set recentPackages(value) {
    this.packageDataService.recents = value;
  }

  // Subscribe (fire) an HTTP get request for the 5 most recent packages and store it in the data field for template display
  getRecentPackages(count: number) {
    this.packageDataService.getRecent(5).subscribe(result => {
      let resultValues = Object.values(result);
      let formattedResponse = [];
      for (let value in resultValues) {
        formattedResponse.push(resultValues[value])
      }
      this.recentPackages = formattedResponse;
    })
  }

  ngOnInit() {
    // Get the 5 most recent packages entered in the database
    this.getRecentPackages(5);
  }

}
