import { Injectable } from '@angular/core';

import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private authService: AuthService, private router: Router) { }

  user: any;

  // Sign in the user through Google and navigate to home upon successful authentication
  signIn(platform: string) {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(platform).then(
      (response) => {
        /**
         * Print for debugging logged in user data
         * console.log(platform + " logged in user data is= " , response);
         */
        this.user = response;
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
      }
    );
  }

  // Sign out the user and redirect back to login page
  signOut() {
    this.authService.signOut();
    this.user = null;
    this.router.navigate(['/login']);
  }
}
