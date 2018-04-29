import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BackendService} from './backend.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BackendService
  ]
})

export class BackendModule {}
