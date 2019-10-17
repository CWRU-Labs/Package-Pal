import { ImageDataService } from '../image-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(public imagePreview: ImageDataService) { }

  file;
  public message: string;

  get img() {
    return this.imagePreview.image;
  }

  set img(value) {
    this.imagePreview.image = value;
  }

  onFileUpload(event) {

    this.file = event.target.files[0];

    if (this.file.type.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.img = reader.result;
    };
    reader.readAsDataURL(this.file);
  }

  ngOnInit() {
  }

}
