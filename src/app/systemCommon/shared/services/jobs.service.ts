import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BackendService} from '../../../backendCommon/backend.service';
import {Job} from '../models/jobs.model';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class JobsService extends BackendService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getAllJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>('http://localhost:3000/jobs');
  }

}
