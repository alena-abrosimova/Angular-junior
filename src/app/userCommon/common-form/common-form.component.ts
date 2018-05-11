import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';

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

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // реакция на попытку войти в систему без входа
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['deniedAccess']) {
          this.textMassage = 'Для доступа в систему необходимо войти';
        }
      });
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
    // проверка входящего пользователя и правильности введенных данных
    this.userService.getCurrentUserData(formLogin.value.email).subscribe((user: User) => {
      if (user) {
        if (user.pass === this.password) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.userService.login();
          this.router.navigate(['/system', 'jobs']);
        } else {
          this.textMassage = 'Пароль не верный';
        }
      } else {
        this.textMassage = 'Пользователя не существует';
      }
    });
  }

}
