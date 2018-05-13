import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import * as moment from 'moment';

import {Job} from '../shared/models/jobs.model';
import {JobsService} from '../shared/services/jobs.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit, OnDestroy {
  // cols = 4;
  jobs: Job[] = [];
  sub1: Subscription;

  constructor(private route: ActivatedRoute,
              private jobService: JobsService,
              private dialog: MatDialog) { }


  ngOnInit() {
    // Динамическое изменение количества колонок в gridlist
    // this.route.queryParams
    //   .subscribe((params: Params) => {
    //     if (params['isSideNavOpened']) {
    //       this.cols = 3;
    //     } else if (params['isSideNavClosed']) {
    //       this.cols = 4;
    //     }
    //   });
    // Выгрузка всех предложений о работе
    this.sub1 = this.jobService.getAllJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
    // Выгрузка предложений о работе с фильтрацией
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['checkEasyLevel']) {
          this.sub1 = this.jobService.getJobsByLevel('easy')
            .subscribe((jobs: Job[]) => {
            if (jobs) {
              this.jobs = jobs;
            }
          });
        }
        if (params['checkMidLevel']) {
          this.sub1 = this.jobService.getJobsByLevel('middle')
            .subscribe((jobs: Job[]) => {
              if (jobs) {
                this.jobs = jobs;
              }
            });
        }
        if (params['checkHighLevel']) {
          this.sub1 = this.jobService.getJobsByLevel('high')
            .subscribe((jobs: Job[]) => {
              if (jobs) {
                this.jobs = jobs;
              }
            });
        }
        if (params['checkAll']) {
          this.sub1 = this.jobService.getAllJobs().subscribe((jobs: Job[]) => {
            this.jobs = jobs;
          });
        }
      });
    this.jobs.sort((a, b) => (+moment(b.date, 'DD.MM.YY')) - (+moment(a.date, 'DD.MM.YY')));
  }

  openDialog(job: Job): void {
    const dialogRef = this.dialog.open(JobDialogComponent, {
      width: '350px',
      data: {
        title: job.title,
        level: job.level,
        fee: job.fee,
        date: job.date,
        comment: job.clarification
      }
    });
  }
  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}

@Component({
  selector: 'app-job-dialog',
  templateUrl: 'job-dialog.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<JobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
