import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {BackendService} from '../../../backendCommon/backend.service';
import {Contract} from '../models/contracts.model';



@Injectable()
export class ContractsService extends BackendService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getContractsByContractor(contractor: number): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`http://localhost:3000/contracts?contractor=${contractor}`);
  }
}
