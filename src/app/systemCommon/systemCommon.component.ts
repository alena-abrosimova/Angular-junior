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

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.router.navigate(['/system', 'jobs']);
  }
  onLogout() {
    this.userService.logout();
    this.router.navigate(['/home', 'login']);
  }
}
