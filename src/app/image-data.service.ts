import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  image: string | ArrayBuffer;
  constructor() { }
}
