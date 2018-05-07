import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommonFormComponent} from './common-form/common-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {UserCommonComponent} from './userCommon.component';

const routes: Routes = [
  {path: '', component: UserCommonComponent, children: [
    {path: 'login', component: CommonFormComponent},
    {path: 'registration', component: RegisterFormComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserCommonRoutingModule {}

