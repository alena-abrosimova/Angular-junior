import {Injectable, } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class BackendService {

  constructor(private http: HttpClient) {}

 // private getUrl(url: string = ''): string {
 //   return this.baseUrl + url;
 // }

  public get(url: string = ''): Observable<any> {
    return this.http.get(url);
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(url, data);
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(url, data);
  }

}
