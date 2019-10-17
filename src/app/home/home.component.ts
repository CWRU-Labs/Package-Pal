import { ImageDataService } from '../image-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public imagePreview: ImageDataService) { }

  get img() {
    return this.imagePreview.image;
  }

  set img(value) {
    this.imagePreview.image = value;
  }

  ngOnInit() {
  }

}
