import { Component, OnInit, ViewChildren } from '@angular/core';
import { SettingService } from '@common/services/setting.service';
import { Router } from '@angular/router';
import { UserService } from '@common/services/user.service';
import { select, Store } from '@ngrx/store';
import { NgoSignupVerificationFromProfile } from '@stateManagement/actions/user.action';
import { Actions, ofType } from '@ngrx/effects';
import { CounterDirective } from '@common/directives/timer.directive';
import { NgoService } from '@common/services/ngo.service';
import { NGOVolunteerLoginDialogueComponent } from '../ngo-volunteer-login/ngo-volunteer-login.component';
import { DynamicDialogRef } from 'primeng';

@Component({
  selector: 'app-ngo-register-verify-dialogue',
  templateUrl: './ngo-register-verify.component.html',
  styleUrls: ['./ngo-register-verify.component.css']
})
export class NgoRegisterVerifyComponent implements OnInit {
  @ViewChildren(CounterDirective) CounterDirective;
  errors: any = {};
  isDisabled: number;
  otpRequired: boolean = false;
  getOTP: number;
  isCheck: false;
  gettoken: any;
  public counter: number;
  public myData = {};
  public newSignup: any = {};
  public settings = {
    length: 6,
    numbersOnly: true,
    timer: 120
  }
  resp: any;
  public constructor(
    private actions$: Actions,
    public settingService: SettingService,
    public userService: UserService,
    private store: Store,
    public ngoService: NgoService,
    public ref: DynamicDialogRef,
) {
    // Get Errors from server side via store
    this.actions$.pipe(ofType('GET_ERRORS')).subscribe(data => {
      this.errors = data;
    })
    this.newSignup = JSON.parse(atob(sessionStorage.getItem('nsd')));
    // Save Token In Session Storage
    this.actions$.pipe(ofType('SET_TOKEN')).subscribe(data => {
      this.gettoken = data;
      this.getNGOData(); // Get All Data of a login NGO;
      this.getDynamicNGOData(); // Get All Dynamic Data of a NGO
    })
  }

  ngOnInit(): void {
  }
  getNGOData() {
    this.ngoService.getCurrentNgoDetails().subscribe(resp => {
      if (resp) {
        sessionStorage.setItem('cnd', btoa(unescape(encodeURIComponent(JSON.stringify(resp)))));
        this.ref.close(NGOVolunteerLoginDialogueComponent);
      }
    })
  }
  getDynamicNGOData(){
    this.ngoService.dynamicNGOData().subscribe(data => {
      if(data){
        sessionStorage.setItem('ddon',btoa(JSON.stringify(data)));
      }
    });
  }
  // get OTP & Resend
  onInputChange(e) {
    this.isDisabled = e.length;
    if (e.length == this.settings.length) {
      // e will emit values entered as otp and,
      console.log('otp is', e);
      this.getOTP = e;
    } else if (e == -1) {
      // if e == -1, timer has stopped
      console.log(e, 'resend button enables');
    } else if (e == -2) {
      // e == -2, button click handle
      console.log('resend otp');
      this.errors = {};
    }
  }
  // Send Signup Data in DB
  saveSignupData() {
    if (!this.getOTP) {
      this.otpRequired = true;
    }
    else if (this.getOTP) {
      const values = {
        name: this.newSignup.name,
        contactPerson: this.newSignup.contactPerson,
        isFounder: this.newSignup.isFounder,
        isPassionGruAccessable: this.newSignup.isPassionGruAccessable,
        mobile: this.newSignup.mobile,
        email: this.newSignup.email,
        state: this.newSignup.state,
        website: this.newSignup.website,
        otp: this.getOTP,
      }
      this.store.dispatch(new NgoSignupVerificationFromProfile(values));
      sessionStorage.setItem('activetab', 'story');
    }
  }
  onCheckClick(e) {
    if (e.target.checked) {
      this.settingService.changeStorageType(localStorage);
    } else {
      this.settingService.changeStorageType(sessionStorage);
    }
  }

}

