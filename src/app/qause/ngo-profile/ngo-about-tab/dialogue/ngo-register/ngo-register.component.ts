import { Component, OnInit, ViewChild, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NgoRegister } from '@stateManagement/actions/user.action';
import { Actions, ofType } from '@ngrx/effects';
import * as fromUser from '@stateManagement/reducers/user.reducer';
import { AppCommonUtility } from '@common/utils/app-common-utility';
import { UserService } from '@common/services/user.service'
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ngo-register-dialogue',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NGORegisterDialogueComponent implements OnInit {
  @ViewChild("signupForm") signupForm: any;
  @Output() messageEvent = new EventEmitter<string>();
  model: any = {};
  ngoStates: any[];
  errors: any = {};
  websiteValue: any = '';
  isDomainAvailable: boolean = false;
  isFounder: boolean = false;
  isTermsandcondition: boolean;
  isPassionGruAccessable: boolean = true;
  isLoading: boolean = false;
  selectStates: any[];
  resp: any;
  selectedPhoneCode: any = 91;
  locationData: any = {};
  items: SelectItem[];
  item: any;
  checkingDomain: boolean;
  Agree_btn: boolean = true;
  Local: any;
  constructor(
    private store: Store,
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {
   // get localstorage data
    if (sessionStorage.getItem('nsd')) {
      this.Local = JSON.parse(atob(sessionStorage.getItem('nsd')));
      this.model.name = this.Local?.name;
      this.model.email = this.Local?.email;
      this.model.contactPerson = this.Local?.contactPerson;
      this.isFounder = this.Local?.isFounder;
      this.isTermsandcondition = this.Local?.isTermsandcondition;
      this.isPassionGruAccessable = this.Local?.isPassionGruAccessable;
      this.selectStates = this.Local?.state;
      this.model.enteredmobile = this.Local?.enteredmobile;
      this.model.website = this.Local?.website;
      this.selectedPhoneCode = this.Local?.selectedPhoneCode;

    }
  }

  ngOnInit(): void {
    this.getLocation();
    this.userService.getCountryCodeList().subscribe(list => {
      this.items = [];
      for (let i = 0; i < list.length; i++) {
        this.items.push({ label: list[i].country_code, value: list[i].phone_code });
      }
    });
    this.userService.getAllStates().subscribe(data => {
      this.ngoStates = AppCommonUtility.createDropdownwithObjKey(data, "name");
    })
    const funcResp = this.store.pipe(select(fromUser.getUserData)) as Observable<any[]>
    funcResp.subscribe(data => {
      this.resp = data;
      if (this.resp.email || this.resp.mobile) {
        this.isLoading = false;
      }
    })
  }

  // Find Lat & lng
  getLocation(): void {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       if (position) {
    //         let body = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude,
    //         };
    //         this.userService.getUserLocation(body).subscribe(
    //           (res: any) => {
    //             if (res.status === 'Success' && res.result.results.length > 0) {
    //               const resLength = res.result.results[0].address_components.length;
    //               this.locationData = {
    //                 zip: res.result.results[0].address_components[resLength - 1].long_name,
    //                 country: res.result.results[0].address_components[resLength - 2].long_name,
    //                 state: res.result.results[0].address_components[resLength - 3].long_name,
    //                 city: res.result.results[0].address_components[resLength - 4].long_name,
    //                 lat: res.result.results[0].geometry.location.lat,
    //                 lng: res.result.results[0].geometry.location.lng,
    //                 street: res.result.results[0].formatted_address,
    //               };
    //               this.selectStates = this.locationData.state;
    //             }
    //           },
    //           (error) => {
    //             console.log('error ', error);
    //             alert('Please Allow location.');
    //           }
    //         );
    //       }
    //     },
    //     (error) => console.log(error)
    //   );
    // } else {
    //   alert('Geolocation is not supported by this browser.');
    // }
  }

  //Function for only alphabet value
  alphaOnly(event) {
    return /^[a-zA-Z ]*$/i.test(event.key)
  }

  changeStates(event) {
    this.selectStates = event.value;
  }

  checkDomainData(event) {
    this.isDomainAvailable = false;
    this.checkingDomain = true;
    const data = {
      website: event.target.value
    }
    this.userService.checkDomain(data).subscribe(data => {
      this.websiteValue = data;
      if (this.websiteValue.status) {
        this.isDomainAvailable = this.websiteValue.status;
      }
      setTimeout(() => {
        this.checkingDomain = false;
      }, 1000);
    }, err => {
      this.errors = err.error;
      this.isLoading = false;
    })
  }
  agree(event) {
    if (event.checked) {
      this.Agree_btn = false;
    }
    else {
      this.Agree_btn = true;
    }
  }
  // NGO Signup
  ngoSignup({ value, valid }: { value: any, valid: boolean }) {
    if (valid === true) {
      this.isLoading = true;
      this.model.isFounder = this.isFounder;
      this.model.state = this.selectStates;
      value.mobile = this.selectedPhoneCode + "-" + this.model.enteredmobile || this.Local?.selectedPhoneCode + "-" + this.Local?.enteredmobile;
      value.enteredmobile = this.model.enteredmobile; // only for save in sessionstorage to get again
      value.selectedPhoneCode = this.selectedPhoneCode; // only for save in sessionstorage to get again
      if (this.isFounder) {
        localStorage.setItem('cp', value.contactPerson);
      }
      sessionStorage.setItem('nsd', btoa(JSON.stringify(value)));
      this.userService.ngoSignup(value).subscribe((resp:any) => {
        if (resp.success) {
          // this.router.navigate(['/ngo-signup-verify'])
          this.messageEvent.emit('true')          
        }
      }, err => {
          this.errors = err.error.error || err.error;
          this.isLoading = false;
      })
    }
  }
  

}





