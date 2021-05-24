

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { SettingService } from '@common/services/setting.service';
// import { Login } from '@common/models/Ngo';
import { select, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
// import { UserService } from '@common/services/user.service';
import { DialogService, DynamicDialogRef, SelectItem } from 'primeng';
@Component({
  selector: 'app-ngo-volunteer-login',
  templateUrl: './ngo-volunteer-login.component.html',
  styleUrls: ['./ngo-volunteer-login.component.css']
})
export class NGOVolunteerLoginDialogueComponent implements OnInit {
  @ViewChild("loginForm") loginForm: any;
  ref: DynamicDialogRef;
  model: any = {};
  errors: any = {};
  form: any;
  isLoading: boolean = false;
  show = false;
  buttonName = 'Email Address';
  hide: any;
  resp: any;
  selectedCode: number = 91;
  items: SelectItem[];
  item: any;
  isSelectedNGOTab: boolean = false;
  isSelectedVolunteer: boolean = false;
  verifyNGOOTP:boolean = false;
  registerNGO:boolean = false;
  showNGOLogin:boolean = false;
  registerNGOVerify:boolean = false;
  constructor(private router: Router,
    private store: Store,
    private actions$: Actions,
    // public settingService: SettingService,
    // public userService: UserService,
    public dialogService: DialogService,
  ) {
    this.actions$.pipe(ofType('GET_ERRORS')).subscribe((data:any) => {
      if (!data?.payload?.success) {
        this.isLoading = false;
        this.errors = data;
      }
    });
  }

  ngOnInit(): void {
    // this.userService.getCountryCodeList().subscribe(list => {
    //   this.items = [];
    //   for (let i = 0; i < list.length; i++) {
    //     this.items.push({ label: list[i].country_code, value: list[i].phone_code });
    //   }
    // });
  }
  selectNGO(tab){
    if(tab === 'ngo'){
      this.isSelectedNGOTab = true;
      this.showNGOLogin = true;
      this.verifyNGOOTP = false;
    }else if(tab === 'volunteer'){
      this.isSelectedVolunteer = true;
    }
  }
  onLogin({ value, valid }: { value: any, valid: boolean }) {
    if (valid == true) {
      this.isLoading = true;
      if (!this.model.mobileno) {
        this.model.ngomobile = null;
        sessionStorage.setItem('nsd', btoa(JSON.stringify(this.model)));
        // this.store.dispatch(new LoginUser(Object.assign({}, this.model)));
        // this.userService.ngoLogin(Object.assign({}, this.model)).subscribe(resp=>{
        //   if(resp){
        //     this.verifyNGOOTP = true;
        //     this.showNGOLogin = false;
        //     this.isSelectedNGOTab = true;
        //   }
        // }, err=>{
        //   this.errors = err.error;
        // })
      } else if (this.model.mobileno) {
        this.model.ngomobile = this.selectedCode + "-" + this.model.mobileno;
        sessionStorage.setItem('nsd', btoa(JSON.stringify(this.model)));
        // this.store.dispatch(new LoginUser(Object.assign({}, this.model)));
        // this.userService.ngoLogin(Object.assign({}, this.model)).subscribe(resp=>{
        //   console.log(resp);
        //   if(resp){
        //     this.verifyNGOOTP = true;
        //     this.showNGOLogin = false;
        //     this.isSelectedNGOTab = true;
        //   }
        // }, err=>{
        //   this.errors = err.error;
        // }
        // )
      }
    }
  }

  // Show hide  fields
  toggle() {
    this.show = !this.show
    if (this.show) {
      this.buttonName = 'Mobile Number';
    }
    else {
      this.buttonName = 'Email Address';
    }
  }

  ngoSingup(){
    this.verifyNGOOTP = false;
    this.isSelectedNGOTab = true;
    this.showNGOLogin = false;
    this.registerNGO = true;
    // this.ref.close(NGOVolunteerLoginDialogueComponent);
      // this.router.navigate(['/ngo-signup']);
  }
  receiveMessage($event) {
    this.verifyNGOOTP = false;
    this.isSelectedNGOTab = true;
    this.showNGOLogin = false;
    this.registerNGO = false;
    this.registerNGOVerify = true;
  }

}
