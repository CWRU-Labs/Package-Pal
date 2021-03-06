import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PackageDataService } from './package-data.service';

describe('PackageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: PackageDataService = TestBed.get(PackageDataService);
    expect(service).toBeTruthy();
  });
});
