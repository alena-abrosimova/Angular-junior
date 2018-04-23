import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  hidePassword = 'Скрывать пароль';
  password = '';
  passType = 'password';

  formRegister: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.formRegister = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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
    if (this.hidePassword === 'Скрывать пароль') {
      this.hidePassword = 'Показывать пароль';
    } else {
      this.hidePassword = 'Скрывать пароль';
    }
  }

  onSubmit() {
    console.log('Submited!', this.formRegister);
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


}
