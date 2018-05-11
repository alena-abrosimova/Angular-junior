import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../shared/models/user.model';
import {UserService} from '../shared/services/user.service';



@Component({
  selector: 'app-system-common',
  templateUrl: './systemCommon.component.html',
  styleUrls: ['./systemCommon.component.scss']
})
export class SystemCommonComponent implements OnInit {

  user: User;
  state = true;
  sideNavState = false;
  constructor(private userService: UserService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.router.navigate(['/system', 'jobs']);
  }
  onLogout() {
    this.userService.logout();
    this.router.navigate(['/home', 'login']);
  }
  jobState() {
    this.state = true;
  }
  contractState() {
    this.state = false;
  }
  onSideNavState() {
    if (this.state === true) {
      if (this.sideNavState === true) {
        this.sideNavState = false;
      } else {
        this.sideNavState = true;
      }
      if (this.sideNavState === true) {
        this.router.navigate(['/system', 'jobs'], {queryParams: {isSideNavOpened: true}});
      }
      if (this.sideNavState === false) {
        this.router.navigate(['/system', 'jobs'], {queryParams: {isSideNavClosed: true}});
      }
    }

  }
}
