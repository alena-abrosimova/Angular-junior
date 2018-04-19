import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  hidePassword = 'Скрывать пароль';
  password = '';
  passType = 'password';

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    if (this.passType === 'password') {
      this.passType = 'text';
    } else {
      this.passType = 'password';
    }
    if (this.hidePassword === 'Скрывать пароль') {
      this.hidePassword = 'Показывать пароль';
    } else {
      this.hidePassword = 'Скрывать пароль';
    }
  }

}
