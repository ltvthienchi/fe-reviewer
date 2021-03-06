import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angular5-social-auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ReportAdminComponent } from './component/admin/report-admin/report-admin.component';
import { FeedbackAdminComponent } from './component/admin/feedback-admin/feedback-admin.component';
import { CustomerCareAdminComponent } from './component/admin/customer-care-admin/customer-care-admin.component';
import { LockReviewerComponent } from './component/admin/lock-reviewer/lock-reviewer.component';
import { ComfirmCompanyComponent } from './component/admin/comfirm-company/comfirm-company.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {Broadcaster} from './services/broadcaster/broadcaster.service';
import {EventMessage} from './services/event_message/event-message.service';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {AuthGuardAdminService} from './services/auth/auth-guard-admin.service';
import {AuthService} from './services/auth/auth.service';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
import { UserSideComponent } from './component/side/user-side/user-side.component';
import { AdminSideComponent } from './component/side/admin-side/admin-side.component';
import { LoginSideComponent } from './component/side/login-side/login-side.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserUpdatePageComponent } from './component/home/user-update-page/user-update-page.component';
import { MenuLoginComponent } from './component/menu-login/menu-login.component';
import {
  MatSliderModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatListIconCssMatStyler, MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageAdminComponent } from './component/admin/manage-admin/manage-admin.component';
import { CompareComponent } from './component/compare/compare.component';
import { TopCompanyComponent } from './component/top-company/top-company.component';
import { DdmmyyyyPipe } from './services/pipe/ddmmyyyy.pipe';
import { ContentPostComponent } from './component/home/content-post/content-post.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { LoginAdminComponent } from './component/admin/login-admin/login-admin.component';
import {UserService} from './services/user-service/user.service';
import { TextAlertComponent } from './services/validator/text-alert/text-alert.component';
import {CompanyService} from './services/company-service/company.service';
import { RegisterConfirmationComponent } from './component/register-confirmation/register-confirmation.component';
import { ModalRatingComponent } from './component/home/modal-rating/modal-rating.component';
import {AdminService} from './services/admin-service/admin.service';
import {AuthAfterLoginService} from './services/auth/auth-after-login.service';
import {HttpService} from './services/http/http.service';
import {DataService} from './services/data-service/data.service';
import { FloatFixedPipe } from './services/pipe/float-fixed.pipe';
import { HomeCompanyComponent } from './component/company/home-company/home-company.component';
import { CreateProductComponent } from './component/company/create-product/create-product.component';
import { SearchComponent } from './component/search/search.component';
import {TopRatingService} from './services/data-global/top-rating.service';
import { CommentPostComponent } from './component/home/comment-post/comment-post.component';
import {AvatarService} from './services/avatar-service/avatar.service';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { ActivityHistoryComponent } from './component/user-page/activity-history/activity-history.component';
import { ReportedCommentComponent } from './component/admin/reported-comment/reported-comment.component';
import { ManageProductComponent } from './component/admin/manage-product/manage-product.component';
import { ModalDetailComponent } from './component/admin/manage-product/modal-detail/modal-detail.component';
import {IdUserService} from './services/data-global/id-user.service';
import { TimeAgoPipe } from './services/pipe/time-ago.pipe';
import { PostDetailProductComponent } from './component/home/post-detail-product/post-detail-product.component';
import { AlertMessageComponent } from './component/message/alert-message/alert-message.component';
import { SubcriptionsComponent } from './component/subcriptions/subcriptions.component';
import { AdvertismentComponent } from './component/advertisment/advertisment.component';
import { ReviewCompanyComponent } from './component/company/review-company/review-company.component';
import { NgbModule, NgbRating, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewListCompanyComponent } from './component/company/review-list-company/review-list-company.component';
import { UpdateProfileComponent } from './component/company/update-profile/update-profile.component';
import { ChangePasswordComponent } from './component/company/change-password/change-password.component';
import { TableReviewComponent } from './component/company/table-review/table-review.component';
import { HomeAdminComponent } from './component/admin/home-admin/home-admin.component';
import { ChartHomeComponent } from './component/admin/home-admin/chart-home/chart-home.component';
import { ModalUploadAvtComponent } from './component/company/modal-upload-avt/modal-upload-avt.component';
import { ModalUploadPanelComponent } from './component/company/modal-upload-panel/modal-upload-panel.component';
import { FileDropModule } from 'ngx-file-drop';
import {NameService} from './services/name-service/name.service';
import {ReviewService} from './services/review-service/review.service';

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
    autoHide: 3000,
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

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('968467163137-dtdndh85b47p1qul44rlf8gpk1ehekct.apps.googleusercontent.com')
      }
    ]
);
  return config;
}

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
    MenuLoginComponent,
    ManageAdminComponent,
    CompareComponent,
    TopCompanyComponent,
    DdmmyyyyPipe,
    ContentPostComponent,
    UserPageComponent,
    LoginAdminComponent,
    TextAlertComponent,
    RegisterConfirmationComponent,
    ModalRatingComponent,
    FloatFixedPipe,
    HomeCompanyComponent,
    CreateProductComponent,
    SearchComponent,
    CommentPostComponent,
    DetailProductComponent,
    ActivityHistoryComponent,
    ReportedCommentComponent,
    ManageProductComponent,
    ModalDetailComponent,
    TimeAgoPipe,
    PostDetailProductComponent,
    AlertMessageComponent,
    SubcriptionsComponent,
    AdvertismentComponent,
    ReviewCompanyComponent,
    ReviewListCompanyComponent,
    UpdateProfileComponent,
    ChangePasswordComponent,
    TableReviewComponent,
    ModalUploadAvtComponent,
    ModalUploadPanelComponent,
    HomeAdminComponent,
    ChartHomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NotifierModule.withConfig(customNotifierOptions),
    AppRoutingModule,
    JwtModule.forRoot(JWT_Module_Options),
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgbModule.forRoot(),
    NgbRatingModule,
    SocialLoginModule,
    FileDropModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSliderModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [ModalRatingComponent, ModalDetailComponent, PostDetailProductComponent, AlertMessageComponent,
  ReviewCompanyComponent, ModalUploadAvtComponent, ModalUploadPanelComponent
  ],
  providers: [
    Broadcaster,
    EventMessage,
    AuthGuardService,
    AuthGuardAdminService,
    AuthService,
    UserService,
    CompanyService,
    AdminService,
    AuthAfterLoginService,
    HttpService,
    DataService,
    TopRatingService,
    AvatarService,
    IdUserService,
    NameService,
    ReviewService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
