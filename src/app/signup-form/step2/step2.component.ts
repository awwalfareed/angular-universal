import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgoSignupFormTwo } from '@stateManagement/actions/ngo.action';
import * as fromNgo from '@stateManagement/reducers/ngo.reducer';
import { AppCommonUtility } from '@common/utils/app-common-utility'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng';
import { UserService } from '@common/services/user.service'
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  
  @ViewChild('stepTwoForm') stepTwoForm: any;
  model: any = {};
  allSteps: any;
  year: any = {};
  years: any[] = [];
  yy: number;
  isLoading: boolean = false;
  items: SelectItem[];
  item: any;
  allyears: SelectItem[];
  phone_code: number = 91;
  constructor(private store: Store,
    private router: Router,
    public userService: UserService,
  ) {
    // get localstorage data
    if (JSON.stringify(localStorage.getItem('ngo')) != null) {
      this.allSteps = JSON.parse(localStorage.getItem('ngo'));
    }
  }


  ngOnInit(): void {
    this.getYears();
    this.getAllStepsFromLocalstorage();
    this.getCurrentNGOData();
    this.userService.getCountryCodeList().subscribe(list => {
      this.items = [];
      for (let i = 0; i < list.length; i++) {
        this.items.push({ label: list[i].country_code, value: list[i].phone_code });
      }
    });
  }
  
  getAllStepsFromLocalstorage() {
    if ((JSON.stringify(this.allSteps.stepTwo)) != null) {
      this.model = this.allSteps.stepTwo;
      this.model.foundingYear = this.allSteps.stepTwo.foundingYear;
      this.model.mobilenumber = this.allSteps.stepTwo.mobilenumber;
      this.phone_code = this.allSteps.stepTwo.phone_code;
    }
  }
  getCurrentNGOData(){
    // get Current NGO Details
    if(sessionStorage.getItem('cnd') != null){
      let response = JSON.parse(atob(sessionStorage.getItem('cnd')));
      this.model.publicEmail = response.email
      this.model.mobilenumber = response.mobile // check country code also
    }
  }
  getYears() {
    var today = new Date();
    this.yy = today.getFullYear();
    for (var i = (this.yy - 100); i <= this.yy; i++) {
      this.years.push(i);
    }
    this.allyears = AppCommonUtility.createListWithKeyValue(this.years, this.years)
  }
  submitStepTwo({ value, valid }: { value: any, valid: boolean }) {
    if (valid == true) {
      this.isLoading = true;
      this.model.publicMobile = this.phone_code + "-" + this.model.mobilenumber;
      console.log(this.model)
      this.store.dispatch(new NgoSignupFormTwo(this.model));
      this.router.navigate(['/signupform/step3'])
    }
  }
  
}