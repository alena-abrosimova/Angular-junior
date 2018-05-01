import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

import {BackendService} from '../backendCommon/backend.service';
import {User} from '../shared/models/user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class UserService extends BackendService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getCurrentUserData (email: string): Observable<User> {
    return this.httpClient.get<User[]>(`http://localhost:3000/users?email=${email}`)
      .map((user: User[]) => {
        return user[0] ? user[0] : undefined;
      });
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }

}
