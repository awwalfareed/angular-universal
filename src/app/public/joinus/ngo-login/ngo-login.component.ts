import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '@common/services/setting.service';
import { Login } from '@common/models/Ngo';
import { LoginUser } from '@stateManagement/actions/user.action';
import { select, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import * as fromUser from '@stateManagement/reducers/user.reducer';
import { Observable } from 'rxjs';
import { UserService } from '@common/services/user.service';
import { AppCommonUtility } from '@common/utils/app-common-utility'
import { SelectItem } from 'primeng';
import { timeInterval, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm: any;
  model: any = {};
  errors: any = {};
  form: any;
  show = false;
  buttonName = 'Email Address';
  hide: any;
  resp: any;
  selectedCode: number = 91;
  items: SelectItem[];
  item: any;

  constructor(private router: Router,
    private store: Store,
    private actions$: Actions,
    public settingService: SettingService,
    public userService: UserService
  ) {
    this.actions$.pipe(ofType('GET_ERRORS')).subscribe((data:any) => {
      if (!data?.payload?.success) {
        this.errors = data;
      }
    });
  }

  ngOnInit(): void {
    this.userService.getCountryCodeList().subscribe(list => {
      this.items = [];
      for (let i = 0; i < list.length; i++) {
        this.items.push({ label: list[i].country_code, value: list[i].phone_code });
      }
    });
  }
  onLogin({ value, valid }: { value: Login, valid: boolean }) {
    if (valid == true) {
      if (!this.model.mobileno) {
        this.model.ngomobile = null;
        sessionStorage.setItem('nsd', btoa(JSON.stringify(this.model)));
        this.store.dispatch(new LoginUser(Object.assign({}, this.model)));
      } else if (this.model.mobileno) {
        this.model.ngomobile = this.selectedCode + "-" + this.model.mobileno;
        sessionStorage.setItem('nsd', btoa(JSON.stringify(this.model)));
        this.store.dispatch(new LoginUser(Object.assign({}, this.model)));
      }
    }
  }

  // Show hide  fields
  toggle(login) {
    this.show = !this.show;
    login.reset();
    if (this.show) {
      this.buttonName = 'Mobile Number';
    }
    else {
      this.buttonName = 'Email Address';
    }
  }

}
