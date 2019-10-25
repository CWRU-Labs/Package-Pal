import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PackageDataService } from './../package-data.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packageId: string;
  
  get pkgInfo() {
    return this.packageDataService.pkg;
  }

  set pkgInfo(value) {
    this.packageDataService.pkg = value;
  }

  constructor(private route: ActivatedRoute, private packageDataService: PackageDataService) { }

  getPackage() {
    this.packageDataService.getPackage(this.packageId).subscribe(res => {
      console.log(res);
      this.pkgInfo = res;
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.packageId = params.get('packageId');
    })
    this.getPackage();
  }

}
