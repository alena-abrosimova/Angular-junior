import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemCommonComponent} from './systemCommon.component';
import {JobFormComponent} from './job-form/job-form.component';
import {ContractFormComponent} from './contract-form/contract-form.component';
import {AuthenticationGuard} from '../shared/services/authentication.guard';

const routes: Routes = [
  {path: 'system', component: SystemCommonComponent, canActivate: [AuthenticationGuard], children: [
    {path: 'jobs', component: JobFormComponent},
    {path: 'contracts', component: ContractFormComponent}
    ]}
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemCommonRoutingModule {}
