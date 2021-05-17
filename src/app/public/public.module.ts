import { NgModule, OnDestroy, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { PrimengModule } from '../primeng.module'
import { KeysPipe } from '@common/pipes/keys.pipe';
import { NumberOnly } from '@common/directives/numberOnly.directive';
import { CounterDirective } from '@common//directives/timer.directive';
import { AuthService } from '@common/services/auth.service';
import { NgoService } from '@common/services/ngo.service';
import { VolunteerService } from '@common/services/volunteer.service';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { NgoLoginComponent } from './joinus/ngo-login/ngo-login.component';
import { NgoSignupComponent } from './joinus/ngo-signup/ngo-signup.component';
import { SelectionPageComponent } from './joinus/selection-page/selection-page.component';
import { NgoSignupVerifyComponent } from './joinus/ngo-signup-verify/ngo-signup-verify.component';
import { OtpInputComponent } from './joinus/otp-input/otp-input.component';
import { LandingComponent } from './home/landing/landing.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
// import ngx-translate and the http loader
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgoLoginVerifyComponent } from './joinus/ngo-login-verify/ngo-login-verify.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageUploadComponent } from './global-components/image-upload/image-upload.component';
import { LoaderComponent } from './global-components/loader/loader.component';
import { ImageViewerComponent } from './global-components/image-viewer/image-viewer.component';
import { NotfoundComponent } from './global-components/notfound/notfound.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2921918691231821')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    HomeComponent,
    JoinusComponent,
    NgoLoginComponent,
    NgoSignupComponent,
    SelectionPageComponent,
    NgoSignupVerifyComponent,
    NgoLoginVerifyComponent,
    OtpInputComponent,
    KeysPipe,
    NumberOnly,
    CounterDirective,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    ImageUploadComponent,
    LoaderComponent,
    ImageViewerComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    SocialLoginModule,
    // configure the imports
    HttpClientModule,
    ImageCropperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],

  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig,
  }, {
    provide: NgoService
  },
  {
    provide: AuthService
  },
  {
    provide: VolunteerService
  },
  KeysPipe
  ],
  exports: [
    ImageUploadComponent,
    LoaderComponent,
    OtpInputComponent,
    ImageViewerComponent,
    KeysPipe,
    NumberOnly,
    CounterDirective,
    NgoLoginComponent, 
    NgoLoginVerifyComponent,
    NotfoundComponent
  ],
})
export class PublicModule {}
