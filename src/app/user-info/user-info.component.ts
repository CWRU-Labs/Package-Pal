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
    const styles = {'background-image' : `url(${this.currentUser.photoUrl})`};
    return styles;
  }

  logout() {
    this.userDataService.signOut();
  }

  ngOnInit() {
  }

}
