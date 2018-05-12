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
  // sideNavState = false;
  constructor(private userService: UserService,
              private router: Router,
  ) { }

  ngOnInit() {
    // Получение данных о вошедшем пользователе
    this.user = JSON.parse(window.localStorage.getItem('user'));
    // Перенаправление на компонент по умолчанию
    this.router.navigate(['/system', 'jobs']);
  }
  onLogout() {
    // выход из системы и перенаправление на компонент логина
    this.userService.logout();
    this.router.navigate(['/home', 'login']);
  }
 // jobState() {
    // ослеживание открытого компонента для изменения содержимого sidenav
  //  this.state = true;
  //  if (this.sideNavState === true) {
  //    this.router.navigate(['/system', 'jobs'], {queryParams: {isSideNavOpened: true, checkAll: true}});
  //  } else if (this.sideNavState === false) {
    //  this.router.navigate(['/system', 'jobs'], {queryParams: { checkAll: true}});
   // }
 // }
 // contractState() {
 //   // ослеживание открытого компонента для изменения содержимого sidenav
 //   this.state = false;
 // }
  // onSideNavState() {
  //  if (this.state === true) {
  //    // передача параметров в подгружаемый компонент в зависимости от состояния sidenav
  //    if (this.sideNavState === true) {
  //      this.sideNavState = false;
  //    } else {
  //      this.sideNavState = true;
  //    }
  //    if (this.sideNavState === true) {
  //      this.router.navigate(['/system', 'jobs'], {queryParams: {isSideNavOpened: true}});
  //    }
  //    if (this.sideNavState === false) {
  //      this.router.navigate(['/system', 'jobs'], {queryParams: {isSideNavClosed: true}});
  //    }
  //  }
  // }
}
