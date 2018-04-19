import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss']
})
export class CommonFormComponent implements OnInit {

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

  submitForm(formLogin: NgForm) {
    console.log('submitted', formLogin.value);
  }

}
