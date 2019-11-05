import { AuthGuard } from './auth.guard';
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

import { ImageDataService } from './image-data.service';
import { PackageDataService } from './package-data.service';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { RecentPackagesComponent } from './recent-packages/recent-packages.component';

// Congif for Google client authentication
const google_oauth_client_id: string = "316380460002-9g7vutkj2684i985joncr724arbtcga3.apps.googleusercontent.com";
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
])


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
    SocialLoginModule.initialize(config),
  ],
  providers: [
    ImageDataService,
    PackageDataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
