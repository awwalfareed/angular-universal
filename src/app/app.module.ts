import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
  // import { StoreModule } from '@ngrx/store';
  // import { localStorageSync } from 'ngrx-store-localstorage';
  // import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
  // import { EffectsModule } from '@ngrx/effects';
  // // import { effects, reducers } from './stateManagement';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './primeng.module';
import { DemoComponent } from './demo/demo.component';
// import { Step1Component } from './signup-form/step1/step1.component';
// import { Step2Component } from './signup-form/step2/step2.component';
// import { Step3Component } from './signup-form/step3/step3.component';
// import { Step4Component } from './signup-form/step4/step4.component';
// import { ImageCropperModule } from 'ngx-image-cropper';
// import { PublicModule } from '@public/public.module';
// import { SignupHeaderComponent } from './signup-form/signup-header/signup-header.component';
// import { SignupLoaderComponent } from './signup-form/signup-loader/signup-loader.component';
// import { LoaderInterceptor } from './loader-interceptor.service';
// import { LoaderService } from '@common/services/loader.service';
// import { MyLoaderComponent } from './my-loader/my-loader.component';


// import { AppHttpInterceptor } from './appHttpInterceptor'
// Store Data
// const allReducers: ActionReducerMap<any> = reducers;
// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return localStorageSync({keys: ['user','ngo'],rehydrate: true })(reducer);
// }
// const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
    // Step1Component,
    // Step2Component,
    // Step3Component,
    // Step4Component,
    // SignupHeaderComponent,
    // SignupLoaderComponent,
    // MyLoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    // EffectsModule.forRoot(effects),
    // StoreModule.forRoot(
    //   allReducers,
    //   { metaReducers },
    // ),
    BrowserAnimationsModule,
    // PrimengModule,
    // ImageCropperModule,
    // PublicModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
