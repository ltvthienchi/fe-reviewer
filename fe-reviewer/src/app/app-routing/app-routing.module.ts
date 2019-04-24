import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard} from '../services/auth/auth-guard.service';


import {HomeComponent} from '../component/home/home.component';
import {CompanyComponent} from '../component/company/company.component';
import {DetailCompanyComponent} from '../component/company/detail-company/detail-company.component';
import {StatsComponent} from '../component/company/stats/stats.component';
import {ViewHistoryCompanyComponent} from '../component/company/view-history-company/view-history-company.component';
import {LoginComponent} from '../component/login/login.component';
import {MenuComponent} from '../component/menu/menu.component';
import {UserSideComponent} from '../component/side/user-side/user-side.component';
import {AdminComponent} from '../component/admin/admin.component';
import {AdminSideComponent} from '../component/side/admin-side/admin-side.component';
import {LoginSideComponent} from '../component/side/login-side/login-side.component';
import {SignUpComponent} from '../component/sign-up/sign-up.component';
import { UserUpdatePageComponent } from '../component/home/user-update-page/user-update-page.component';
import { FeedbackReviewerComponent } from '../component/reviewer/feedback-reviewer/feedback-reviewer.component';
import {ManageAdminComponent} from '../component/admin/manage-admin/manage-admin.component';
import {CompareComponent} from '../component/compare/compare.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { LoginAdminComponent } from '../component/admin/login-admin/login-admin.component';
import {ComfirmCompanyComponent} from '../component/admin/comfirm-company/comfirm-company.component';
import {FeedbackAdminComponent} from '../component/admin/feedback-admin/feedback-admin.component';
import {LockReviewerComponent} from '../component/admin/lock-reviewer/lock-reviewer.component';

const routes: Routes = [
  {
    path: '',
    component: UserSideComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'company/detail/:id', component: DetailCompanyComponent },
      { path: 'company/view-history', component: ViewHistoryCompanyComponent},
      { path: 'user-update-page', component: UserUpdatePageComponent},
      { path: 'feedback', component: FeedbackReviewerComponent},
      { path: 'user-page', component: UserPageComponent},
      { path: 'compare', component: CompareComponent}
    ]
  },
  {
    path: '',
    component: LoginSideComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {
    path: '',
    component: AdminSideComponent,
    children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full'},
      { path: 'admin', component: ManageAdminComponent },
      { path: 'admin/manage-admin', component: ManageAdminComponent },
      { path: 'admin/verify', component: ComfirmCompanyComponent },
      { path: 'admin/manage-user/:userType', component: LockReviewerComponent },
      { path: 'admin/feedback', component: FeedbackAdminComponent }
    ]
  },
  { path: 'admin/login', component: LoginAdminComponent },
  {path: '**', redirectTo: ''}
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
