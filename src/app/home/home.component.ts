import { ImageDataService } from '../image-data.service';
import { Component, OnInit } from '@angular/core';

/**
 * HomeComponent represents the home page navigated to
 * upon employee authentication and login. It displays the
 * upload component, <ADD MORE COMPONENTS HERE ONCE FINISHED>. 
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public imagePreview: ImageDataService) { }

  // Get shared image data for display in the home HTML template
  get img() {
    return this.imagePreview.image;
  }

  // Set shared image data
  set img(value) {
    this.imagePreview.image = value;
  }

  ngOnInit() {
  }

}
