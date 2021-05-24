import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { KeysPipe } from '@common/pipes/keys.pipe';
import { OtpInput } from '@common/models/OtpInput';
import { CounterDirective } from '@common/directives/timer.directive';
import { Store } from '@ngrx/store';
import { NgoRegister,LoginUser } from '@stateManagement/actions/user.action';

@Component({
  selector: 'otp-profile-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.css'],
})
export class OtpInputProgfileComponent implements OnInit {
  @Input() setting: OtpInput = {
    length: 6,
    timer: 0
  };
  @Output() onValueChange = new EventEmitter<any>();
  @ViewChildren(CounterDirective) CounterDirective;
  otpForm: FormGroup;
  inputControls: FormControl[] = new Array(this.setting.length);
  componentKey = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  public counter: number;
  public newSignup: any = {};

  constructor(private keysPipe: KeysPipe, private store: Store) {
    this.newSignup = JSON.parse(atob(sessionStorage.getItem('nsd')));
  }

  public ngOnInit(): void {
    this.otpForm = new FormGroup({})
    for (let index = 0; index < this.setting.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new FormControl())
    }
  }

  public ngAfterViewInit(): void {
   
  }

  private getControlName(idx) {
    return `ctrl_${idx}`;
  }

  isLeftArrow(e) {
    return this.isKeyCode(e, 37);
  }

  isRightArrow(e) {
    return this.isKeyCode(e, 39);
  }

  isBackspaceOrDelete(e) {
    return e.key === "Backspace" || e.key === "Delete" || this.isKeyCode(e, 8) || this.isKeyCode(e, 46);
  }

  isKeyCode(e, targetCode) {
    var key = e.keyCode || e.charCode;
    if (key == targetCode) { return true; }
    return false;
  }

  keyUp(e, inputIdx: number) {
    let nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
    let prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
    if (this.isRightArrow(e)) {
      this.setSelected(nextInputId);
      return;
    }
    if (this.isLeftArrow(e)) {
      this.setSelected(prevInputId);
      return;
    }
    let isBackspace = this.isBackspaceOrDelete(e);
    if (isBackspace && !e.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }
    if (!e.target.value) {
      return;
    }
    if (this.isValidEntry(e)) {
      this.focusTo(nextInputId);
    }
    this.rebuildValue();
  }

  appendKey(id) {
    return `${id}_${this.componentKey}`;
  }

  setSelected(eleId) {
 
  }

  isValidEntry(e) {
    var inp = String.fromCharCode(e.keyCode);
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /[a-zA-Z0-9-_]/.test(inp) || (this.setting.allowKeyCodes && this.setting.allowKeyCodes.includes(e.keyCode)) || (e.keyCode >= 96 && e.keyCode <= 105);
  }

  focusTo(eleId) {

  }

  rebuildValue() {
    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        val += this.otpForm.controls[k].value;
      }
    });
    this.onValueChange.emit(val);
  }

  public onCounterChange(e): void {
    this.counter = e;
    if (this.counter == 0) {
      this.onValueChange.emit(-1);
    }
  }

  ressendOtp(): void {
    this.CounterDirective.first.startTimer();
    this.onValueChange.emit(-2);
    this.otpForm.reset();
    sessionStorage.setItem('activetab', 'story');
    if(this.newSignup.ngomobile || this.newSignup.ngoemail ){
    const values = {
      ngomobile: this.newSignup.ngomobile,
      ngoemail: this.newSignup.ngoemail,
    }
      this.store.dispatch(new LoginUser(values));
    }else
    if(this.newSignup.name){
    const values = {
      name: this.newSignup.name,
      contactPerson: this.newSignup.contactPerson,
      mobile: this.newSignup.mobile,
      isFounder: this.newSignup.isFounder,
      isPassionGruAccessable: this.newSignup.isPassionGruAccessable,
      email: this.newSignup.email,
      state: this.newSignup.state,
      website:this.newSignup.website
      }
      console.log('input==>',values)
      this.store.dispatch(new NgoRegister(values));
  }
    }
}
