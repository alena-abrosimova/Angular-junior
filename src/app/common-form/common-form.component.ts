import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {UserService} from '../userCommon/user.service';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss']
})
export class CommonFormComponent implements OnInit {

  hidePassword = 'Показывать пароль';
  password = '';
  passType = 'password';
  textMassage = '';
  msgClass = 'error';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onClick() {
    if (this.passType === 'password') {
      this.passType = 'text';
    } else {
      this.passType = 'password';
    }
    if (this.hidePassword === 'Показывать пароль') {
      this.hidePassword = 'Скрывать пароль';
    } else {
      this.hidePassword = 'Показывать пароль';
    }
  }

  submitForm(formLogin: NgForm) {
    this.userService.getCurrentUserData(formLogin.value.email).subscribe((user: User) => {
      if (user) {
        if (user.password === this.password) {
          this.textMassage = 'Логин: ' + user.email + ' . Пароль: ' + user.password + '. Имя: ' + user.name;
          this.msgClass = 'hint';
        } else {
          this.textMassage = 'Пароль не верный';
          this.msgClass = 'error';
        }
      } else {
        this.textMassage = 'Пользователя не существует';
        this.msgClass = 'error';
      }
    });
  }

}
