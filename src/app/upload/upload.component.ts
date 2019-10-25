import { Router } from '@angular/router';
import { ImageDataService } from '../image-data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(public imageService: ImageDataService, private http: HttpClient, private router: Router) { }

  file;
  public message: string;
  uploadedFilePath: string = null;

  get img() {
    return this.imageService.image;
  }

  set img(value) {
    this.imageService.image = value;
  }

  onFileUpload(event) {
    this.message = null;
    
    if (event.target.files[0] == undefined) {
      this.message = "Please select an image.";
      return;
    }

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

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.file);
    //alert('local success');
    //this.router.navigate([`/package/${1}`]);
    this.imageService.addLabel(formData);
  }

  ngOnInit() {
  }

}
