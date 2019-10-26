import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * ImageDataService holds the POST method for submitting
 * an image of a package label to the API. It holds the
 * field for the image data for use by
 * all components injecting the service.
 */
@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor(private http: HttpClient) { }

  image: string | ArrayBuffer;

  private apiURL: string = `https://backend-dot-package-pal.appspot.com`;

  // POST the form data to the API
  addLabel(formData: FormData) {
    // concatenate url for image upload
    const url = `${this.apiURL}/uploader`;
    return this.http.post(url, formData);
  }  
}
