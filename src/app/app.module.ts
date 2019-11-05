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
import { PackageComponent } from './package/package.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RecentPackagesComponent } from './recent-packages/recent-packages.component';

import { ImageDataService } from './image-data.service';
import { PackageDataService } from './package-data.service';
import { UserDataService } from './user-data.service';

import { AuthGuard } from './auth.guard';

import { SocialLoginModule } from 'angularx-social-login';

import { Config } from '../assets/auth-config';

// Google OAuth client ID configuration instance
let config = new Config();

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    NavbarComponent,
    HomeComponent,
    SearchResultsComponent,
    PackageComponent,
    LoginComponent,
    UserInfoComponent,
    RecentPackagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule.initialize(config.getConfig()),
  ],
  providers: [
    ImageDataService,
    PackageDataService,
    UserDataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
