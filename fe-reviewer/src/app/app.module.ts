import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CompanyComponent } from './component/company/company.component';
import { ReviewerComponent } from './component/reviewer/reviewer.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MenuComponent } from './component/menu/menu.component';
import { DetailReviewerComponent } from './component/reviewer/detail/detail.component';
import { UpdateInfoReviewerComponent } from './component/reviewer/update-info-reviewer/update-info-reviewer.component';
import { FeedbackReviewerComponent } from './component/reviewer/feedback-reviewer/feedback-reviewer.component';
import { ViewHistoryReviewerComponent } from './component/reviewer/view-history-reviewer/view-history-reviewer.component';
import { RegisterCompanyComponent } from './component/reviewer/register-company/register-company.component';
import { DetailCompanyComponent } from './component/company/detail-company/detail-company.component';
import { ViewHistoryCompanyComponent } from './component/company/view-history-company/view-history-company.component';
import { StatsComponent } from './component/company/stats/stats.component';
import { ReportAdminComponent } from './component/admin/report-admin/report-admin.component';
import { FeedbackAdminComponent } from './component/admin/feedback-admin/feedback-admin.component';
import { CustomerCareAdminComponent } from './component/admin/customer-care-admin/customer-care-admin.component';
import { LockReviewerComponent } from './component/admin/lock-reviewer/lock-reviewer.component';
import { ComfirmCompanyComponent } from './component/admin/comfirm-company/comfirm-company.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {Broadcaster} from './services/broadcaster/broadcaster.service';
import {EventMessage} from './services/event_message/event-message.service';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {AuthService} from './services/auth/auth.service';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
import { UserSideComponent } from './component/side/user-side/user-side.component';
import { AdminSideComponent } from './component/side/admin-side/admin-side.component';
import { LoginSideComponent } from './component/side/login-side/login-side.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserUpdatePageComponent } from './component/home/user-update-page/user-update-page.component';
import { MenuLoginComponent } from './component/menu-login/menu-login.component';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    whitelistedDomains: ['localhost:4000']
  }
};

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    ReviewerComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    DetailReviewerComponent,
    UpdateInfoReviewerComponent,
    FeedbackReviewerComponent,
    ViewHistoryReviewerComponent,
    RegisterCompanyComponent,
    DetailCompanyComponent,
    ViewHistoryCompanyComponent,
    StatsComponent,
    ReportAdminComponent,
    FeedbackAdminComponent,
    CustomerCareAdminComponent,
    LockReviewerComponent,
    ComfirmCompanyComponent,
    UserSideComponent,
    AdminSideComponent,
    LoginSideComponent,
    ComfirmCompanyComponent,
    SignUpComponent,
    UserUpdatePageComponent,
    MenuLoginComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule.withConfig(customNotifierOptions),
    AppRoutingModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
    Broadcaster,
    EventMessage,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
