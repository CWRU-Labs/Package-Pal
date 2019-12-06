import { AuthGuard } from './../auth.guard';
import { Package } from './../package';
import { Router } from '@angular/router';
import { ImageDataService } from '../image-data.service';
import { Component, OnInit } from '@angular/core';

/**
 * UploadComponent handles the upload of a package label
 * by a user, POST to the backend API, and navigation to 
 * the package page by the package's ID once returned
 * by the API.
 */
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    public imageDataService: ImageDataService,
    private router: Router,
    private authGuard: AuthGuard,
  ) { }

  file: any;
  public message: string;
  uploadedFilePath: string = null;
  isLoading: boolean = false;

  get currentUser() {
    return this.authGuard.user;
  }

  // Get the shared image from the image data service
  get img() {
    return this.imageDataService.image;
  }

  // Set the shared image from the image data service
  set img(value) {
    this.imageDataService.image = value;
  }

  // Stores and previews the user-uploaded image in the UI card
  onFileUpload(event) {
    this.message = null;
    
    // Make sure an image was selected
    if (event.target.files[0] == undefined) {
      this.message = "Please select an image.";
      return;
    }

    // Store the file
    this.file = event.target.files[0];

    // Only accept image filetypes
    if (this.file.type.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    // Read the image for display on the UI card
    const reader = new FileReader();
    reader.onload = () => {
      this.img = reader.result;
    };
    reader.readAsDataURL(this.file);
  }

  // POST the image to the API, navigate to its respective package page on response
  onSubmit() {
    this.isLoading = true;
    const formData = new FormData();
    formData.append('file', this.file);
    this.imageDataService.addLabel(formData).subscribe((res: Package) => {
      this.img = null;
      this.router.navigate([`/package/${res.id}`]);
    });
  }

  ngOnInit() {
  }

}
