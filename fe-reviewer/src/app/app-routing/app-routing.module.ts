import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard} from '../services/auth/auth-guard.service';


import {HomeComponent} from '../component/home/home.component';
import {CompanyComponent} from '../component/company/company.component';
import {DetailCompanyComponent} from '../component/company/detail-company/detail-company.component';
import {StatsComponent} from '../component/company/stats/stats.component';
import {ViewHistoryCompanyComponent} from '../component/company/view-history-company/view-history-company.component';
import {LoginComponent} from '../component/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // {path: 'company', component: CompanyComponent, canActivate: [AuthGuard]},
  // {path: 'company/detail/:id', component: DetailCompanyComponent, canActivate: [AuthGuard]},
  // {path: 'company/stats', component: StatsComponent, canActivate: [AuthGuard]},
  // {path: 'company/view-history', component: ViewHistoryCompanyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
