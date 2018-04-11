import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-check-box-pass',
  template: `
<div>
  <mat-form-field>
    <input  matInput [type]="passType" placeholder="Пароль" [(ngModel)]="password">
  </mat-form-field>
  <mat-checkbox [(ngModel)]="hidePassword" (click)="onClick()">
    <span *ngIf="hidePassword">Скрывать пароль</span>
    <span *ngIf="!hidePassword">Показывать пароль</span>
  </mat-checkbox>
</div>
`,
  styleUrls: ['./check-box-pass.component.scss']
})
export class CheckBoxPassComponent implements OnInit {

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
