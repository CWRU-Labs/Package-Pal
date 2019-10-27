import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';

import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';

import { ImageDataService } from './image-data.service';
import { PackageComponent } from './package/package.component';
import { PackageDataService } from './package-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    NavbarComponent,
    HomeComponent,
    SearchResultsComponent,
    PackageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ImageDataService,
    PackageDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
