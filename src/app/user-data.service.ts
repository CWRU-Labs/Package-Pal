import { Injectable } from '@angular/core';

import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private authService: AuthService, private router: Router) { }

  user: any;

  signIn(platform: string) {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
        this.router.navigate(['home']);
      }
    );
  }

  signOut() {
    this.authService.signOut();
    this.user = null;
    console.log('User signed out.');
    this.router.navigate(['login']);
  }
}
