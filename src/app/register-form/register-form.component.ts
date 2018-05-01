import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../userCommon/user.service';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  hidePassword = 'Показывать пароль';
  password = '';
  passType = 'password';
  textMsg = '';

  formRegister: FormGroup;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.formRegister = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      username: new FormControl('', Validators.required),
      pass: new FormControl('', [Validators.required, Validators.pattern('[A-z1-9]{6,100}'), Validators.minLength(6)]),
      retypePass: new FormControl('', Validators.required, this.checkForRePass.bind(this) )
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

  onSubmit() {
    console.log('Submited!', this.formRegister);
    const {email, pass, username} = this.formRegister.value;
    const user = new User(email, pass, username);
    this.userService.register(user).subscribe();
    this.textMsg = 'Пользователь зарегестрирован. Можете войти в систему.';
  }

   checkForRePass(): Promise<any> {
     return new Promise((resolve, reject) => {
       if (this.formRegister.get('retypePass').value !== this.password) {
         resolve({
           'checkPass': true
         });
       } else {
         resolve(null);
       }
     });
  }

  forbiddenEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData(control.value)
        .subscribe((user: User) => {
        if (user) {
          resolve({
            'forbiddenEmail': true
          });
        } else {
          resolve(null);
        }
        });
    });
  }
}
