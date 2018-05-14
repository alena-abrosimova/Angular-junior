import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import * as moment from 'moment';

import {ContractsService} from '../shared/services/contracts.service';
import {Contract} from '../shared/models/contracts.model';
import {User} from '../../shared/models/user.model';
import {Job} from '../shared/models/jobs.model';
import {JobsService} from '../shared/services/jobs.service';



@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit, OnDestroy, AfterViewInit {
  user: User;
  contracts: Contract[] = [];
  jobs: Job[] = [];
  contractor: number;
  sub1: Subscription;
  sub2: Subscription;
  public displayedColumns: string[] = ['jobName', 'hours', 'amount', 'lastDate'];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private contractsService: ContractsService,
              private jobService: JobsService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.contractor = this.user.id;
    this.sub2 = this.jobService.getAllJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
    this._getElementData();
  }

  private _getElementData(): void {
     this.sub1 = this.contractsService.getContractsByContractor(this.contractor)
       .subscribe((contracts: Contract[]) => {
         contracts.forEach((c) => {
           c.jobName = this.jobs.find(j => j.id === c.job).title;
         });
         contracts.sort((a, b) => (+moment(b.lastDate, 'DD.MM.YY h:mm:ss')) - (+moment(a.lastDate, 'DD.MM.YY h:mm:ss')));
         this.dataSource.data = contracts;

       });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}




