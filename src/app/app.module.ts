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
import { PackageComponent, PackageDialogComponent } from './package/package.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RecentPackagesComponent } from './recent-packages/recent-packages.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ImageDataService } from './image-data.service';
import { PackageDataService } from './package-data.service';
import { UserDataService } from './user-data.service';

import { AuthGuard } from './auth.guard';

import { SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';

import { Config } from '../assets/auth-config';

import { MatSnackBarModule } from '@angular/material/snack-bar';

// Google OAuth client ID configuration instance
export function provideConfig() {
  return new Config().getConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    NavbarComponent,
    HomeComponent,
    SearchResultsComponent,
    PackageComponent,
    PackageDialogComponent,
    LoginComponent,
    UserInfoComponent,
    RecentPackagesComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatSnackBarModule
  ],
  providers: [
    ImageDataService,
    PackageDataService,
    UserDataService,
    AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  entryComponents: [
    PackageComponent,
    PackageDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
