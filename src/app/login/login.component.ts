import { UserDataService } from './../user-data.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userDataService: UserDataService, private router: Router) { }

  onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    /** Print for debugging
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    */
  }

  signIn() {
    this.userDataService.signIn('Google');
  }

  ngOnInit() {
  }

}
