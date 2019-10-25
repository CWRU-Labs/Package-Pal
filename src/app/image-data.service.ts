import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor(private http: HttpClient) { }

  image: string | ArrayBuffer;

  apiURL: string = `https://backend-dot-package-pal.appspot.com`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'image/png'
    })
  };

  addLabel(formData: FormData) {
    // concatenate url for image upload
    return this.http.post(this.apiURL, formData, this.httpOptions).subscribe(res => {
      console.log(res);
      alert('SUCCESS');
    });
  }
    

  
}
