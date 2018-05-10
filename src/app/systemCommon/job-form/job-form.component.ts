import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  jobList = [
    {title: 'Job1', level: 'Light'},
    {title: 'Job2', level: 'High'},
    {title: 'Job3', level: 'Middle'},
    {title: 'Job4', level: 'High'},
    {title: 'Job5', level: 'Middle'},
    {title: 'Job6', level: 'Middle'},
    {title: 'Job7', level: 'Light'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
