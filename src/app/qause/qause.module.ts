import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PrimengModule } from '../primeng.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { QauseRoutingModule } from './qause-routing.module';
import { QauseComponent } from './qause.component';
import { QauseHeaderComponent } from './commonComponents/qause-header/qause-header.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { NgoChildSliderComponent } from './home/ngo-child-slider/ngo-child-slider.component';
import { NgoSliderComponent } from './home/ngo-slider/ngo-slider.component';
import { QauseHomeComponent } from './home/home.component';
import { QauseFilterComponent } from './commonComponents/qause-filter/qause-filter.component';
import { QauseHelpComponent } from './commonComponents/qause-help/qause-help.component';
import { VolunteerSliderComponent } from './home/volunteer-slider/volunteer-slider.component';
import { QauseCounterComponent } from './home/qause-counter/qause-counter.component';
// import { NgoBannerInfoComponent } from './ngo-profile/ngo-banner-info/ngo-banner-info.component';
// import { NgoAboutTabComponent } from './ngo-profile/ngo-about-tab/ngo-about-tab.component';
// import { NgoInspiringStoriesComponent } from './ngo-profile/ngo-inspiring-stories/ngo-inspiring-stories.component';
// import { GalleryComponent } from './ngo-profile/gallery/gallery.component';
// import { SimilarNGOsComponent } from './ngo-profile/similar-ngos/similar-ngos.component';
// import { NgoProfileComponent } from './ngo-profile/ngo-profile.component';
// import { NGORegisterDialogueComponent } from './ngo-profile/ngo-about-tab/dialogue/ngo-register/ngo-register.component';
import { SwiperModule } from "swiper/angular";
// import { NGOVolunteerLoginDialogueComponent } from './ngo-profile/ngo-about-tab/dialogue/ngo-volunteer-login/ngo-volunteer-login.component';
// import { NgoLoginVerifyComponent } from './ngo-profile/ngo-about-tab/dialogue/ngo-login-verify/ngo-login-verify.component';
// import { NgoRegisterVerifyComponent } from './ngo-profile/ngo-about-tab/dialogue/ngo-register-verify/ngo-register-verify.component';
// import { VolunteerLoginVerifyComponent } from './ngo-profile/ngo-about-tab/dialogue/volunteer-login-verify/volunteer-login-verify.component';
// import { VolunteerRegisterComponent } from './ngo-profile/ngo-about-tab/dialogue/volunteer-register/volunteer-register.component';
// import { VolunteerRegisterVerifyComponent } from './ngo-profile/ngo-about-tab/dialogue/volunteer-register-verify/volunteer-register-verify.component';
// import { OtpInputProgfileComponent } from './ngo-profile/ngo-about-tab/dialogue/otp-input/otp-input.component';
// import { PublicModule } from '@public/public.module';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';
// import { NgoModule } from '@ngo/ngo.module';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { NgoServicesComponent } from './home/ngo-services/ngo-services.component';
import { VolunteerServiceComponent } from './home/volunteer-service/volunteer-service.component';
import { MediaCoverageComponent } from './home/media-coverage/media-coverage.component';
import { PassionguruComponent } from './home/passionguru/passionguru.component';
import { DonationComponent } from './commonComponents/paymentDialogue/donation/donation.component';
import { FailedDonationComponent } from './commonComponents/paymentDialogue/failed-donation/failed-donation.component';
import { ThanyouDonationComponent } from './commonComponents/paymentDialogue/thanyou-donation/thanyou-donation.component';
import { AssociationsComponent } from './commonComponents/associations/associations.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
// import { NgoStoriesComponent } from './ngo-profile/ngo-stories/ngo-stories.component';
import { EventsComponent } from './commonComponents/events/events.component';
import { SearchComponent } from './category/search/search.component';




@NgModule({
  declarations: [
    QauseComponent,
    QauseHeaderComponent,
    FooterComponent,
    QauseHomeComponent,
    NgoChildSliderComponent,
    NgoSliderComponent,
    QauseFilterComponent,
    QauseHelpComponent,
    VolunteerSliderComponent,
    QauseCounterComponent,
    // NgoBannerInfoComponent,
    // NgoAboutTabComponent,
    // NgoInspiringStoriesComponent,
    // GalleryComponent,
    // SimilarNGOsComponent,
    // NgoProfileComponent,
    // NGORegisterDialogueComponent,
    // NGOVolunteerLoginDialogueComponent,
    // NgoLoginVerifyComponent,
    // NgoRegisterVerifyComponent,
    // VolunteerLoginVerifyComponent,
    // VolunteerRegisterComponent,
    // VolunteerRegisterVerifyComponent,
    // OtpInputProgfileComponent,
    NgoServicesComponent,
    VolunteerServiceComponent,
    MediaCoverageComponent,
    PassionguruComponent,
    DonationComponent,
    FailedDonationComponent,
    ThanyouDonationComponent,
    AssociationsComponent,
    TestimonialsComponent,
    // NgoStoriesComponent,
    EventsComponent,
    SearchComponent,
    EventsComponent
    
  ],
  imports: [
    CommonModule,
    QauseRoutingModule,
    ImageCropperModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // PublicModule,
    PrimengModule,
    // NgoModule,
    // ShareButtonsModule.withConfig({
    //   debug: true
    // }),
    // ShareIconsModule,
    NgxGalleryModule
  ],
})
export class qauseModule { }
