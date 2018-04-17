import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss']
})
export class CommonFormComponent implements OnInit {

  hidePassword = true;
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
  }

}
