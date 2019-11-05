import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ImageDataService } from './image-data.service';

describe('ImageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: ImageDataService = TestBed.get(ImageDataService);
    expect(service).toBeTruthy();
  });
});
