import {Injectable, } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';

@Injectable()

export class BackendService {

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

}
