import { UserDataService } from './../user-data.service';
import { AuthGuard } from './../auth.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private authGuard: AuthGuard, private userDataService: UserDataService) { }

  get currentUser() {
    return this.authGuard.user;
  }

  applyStyles() {
    let styles
    if (this.currentUser != null) {
      if (this.currentUser.photoUrl != undefined) {
        styles = {'background-image' : `url(${this.currentUser.photoUrl})`};
      }
      else {
        styles = {'display' : 'none'};
      }
    }
    return styles;
  }

  logout() {
    this.userDataService.signOut();
  }

  ngOnInit() {
  }

}
