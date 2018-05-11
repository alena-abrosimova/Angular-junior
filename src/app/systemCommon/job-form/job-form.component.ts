import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Job} from '../shared/models/jobs.model';
import {JobsService} from '../shared/services/jobs.service';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit, OnDestroy {
  cols = 4;
  jobs: Job[] = [];
  sub1: Subscription;

  constructor(private route: ActivatedRoute,
              private jobService: JobsService) { }


  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['isSideNavOpened']) {
          this.cols = 3;
        } else if (params['isSideNavClosed']) {
          this.cols = 4;
        }
      });
    this.sub1 = this.jobService.getAllJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }
  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
