import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-common',
  templateUrl: './userCommon.component.html',
  styleUrls: ['./userCommon.component.scss']
})
export class UserCommonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
