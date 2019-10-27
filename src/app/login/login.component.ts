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

  

  ngOnInit() {
  }

}
