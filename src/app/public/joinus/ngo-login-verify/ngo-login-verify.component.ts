import { Component, OnInit, ViewChildren } from '@angular/core';
import { SettingService } from '@common/services/setting.service';
import { Router } from '@angular/router';
import { UserService } from '@common/services/user.service';
import { select, Store } from '@ngrx/store';
import { LoginUserVerification } from '@stateManagement/actions/user.action';
import { Actions, ofType } from '@ngrx/effects';
import { CounterDirective } from '@common/directives/timer.directive';
import { Observable } from 'rxjs';
import * as fromUser from '@stateManagement/reducers/user.reducer';
import { NgoService } from '@common/services/ngo.service';
@Component({
  selector: 'app-ngo-verify-login',
  templateUrl: './ngo-login-verify.component.html',
  styleUrls: ['./ngo-login-verify.component.css']
})
export class NgoLoginVerifyComponent implements OnInit {
  @ViewChildren(CounterDirective) CounterDirective;
  errors: any = {};
  isDisabled: number;
  otpRequired: boolean = false;
  getOTP: number;
  isCheck: boolean = false;
  gettoken: any;
  public counter: number;
  public myData = {};
  public newSignup: any = {};
  public settings = {
    length: 6,
    numbersOnly: true,
    timer: 120
  }
  public constructor(
    private actions$: Actions,
    public userService: UserService,
    public settingService: SettingService,
    private store: Store,
    private ngoService: NgoService,
    private router: Router,
  ) {
    // Get Errors from server side via store
    this.actions$.pipe(ofType('GET_ERRORS')).subscribe(data => {
      this.errors = data;
      if (this.errors.payload.otp) {
      }
    })
    // Get data From Localsorage
    this.newSignup = JSON.parse(atob(sessionStorage.getItem('nsd')));
    // this.newSignup = JSON.parse(ngoData);
    // Save Token In Session Storage
    this.actions$.pipe(ofType('SET_TOKEN')).subscribe(data => {
      this.gettoken = data;
      this.userService.setCurrentUser(this.gettoken.payload);
      this.getNGOData(); // Get All Data of a current NGO
      this.getDynamicNGOData(); // Get All Dynamic Data of a NGO
    })
  }
  ngOnInit(): void {

  }
  getNGOData() {
    this.ngoService.getCurrentNgoDetails().subscribe(resp => {
      if (resp) {
        sessionStorage.setItem('cnd',btoa(unescape(encodeURIComponent(JSON.stringify(resp)))));
        this.router.navigate(['/ngobackend/dashboard'])
      }
    })
  }
  getDynamicNGOData() {
    this.ngoService.dynamicNGOData().subscribe(data => {
      if (data) {
        sessionStorage.setItem('ddon', btoa(JSON.stringify(data)));
      }
    });
  }
  getInput(e) {
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }
  }
  //get OTP & Resend
  onInputChange(e) {
    this.isDisabled = e.length;
    if (e.length == this.settings.length) {
      // e will emit values entered as otp and,
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


  verifyLoginOTP() {
    if (!this.getOTP) {
      this.otpRequired = true;
    }
    else if (this.getOTP) {
      const values = {
        ngomobile: this.newSignup.ngomobile,
        ngoemail: this.newSignup.ngoemail,
        otp: this.getOTP,
      }
      this.store.dispatch(new LoginUserVerification(values));
      sessionStorage.setItem('activetab', 'story');
    }
  }
  onCheckClick(e) {
    console.log(e.target.ariaChecked);
    if (e.target.ariaChecked) {
      this.settingService.changeStorageType(localStorage);
    } else {
      this.settingService.changeStorageType(sessionStorage);
    }
  }

}
