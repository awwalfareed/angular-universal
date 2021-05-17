import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Observable, Subscribable } from 'rxjs';
import { User } from '../models/Ngo';
import { environment } from '../../../environments/environment';
import {SettingService} from './setting.service';
import { NgoService } from './ngo.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  APIURL = environment.apiBaseUrl;
  expirationDuration: any; 
  user: User = {
    isAuthenticate: false,
    currentUser: {},
    loading: false
  }
  isLoggedIn: boolean = false;
  // public newUser: any = {};
  constructor(private http: HttpClient, private router: Router, private settingService:SettingService, private ngoService: NgoService) {
    if (JSON.parse(this.settingService.storageType.getItem('currentUser')) != null) {
      this.user = JSON.parse(this.settingService.storageType.getItem('currentUser'));
      this.isLoggedIn = true;
    }
    this.expirationDuration = this.user.currentUser['exp'];
    //this.expirationDuration = 10000;
    // console.log('Exp Time', this.expirationDuration)

  }
  getCurrentUser() {
    return this.user;
  }
   setCurrentUser(data: any) {
    const decoded = jwt_decode(data.token);
    this.user = {
      isAuthenticate: true,
      currentUser: decoded,
      loading: false
    }
     this.settingService.storageType.setItem('jwt_token', JSON.stringify(data.token))
     this.settingService.storageType.setItem('currentUser', JSON.stringify(this.user));
  }
  getUserLocation(user): Observable<any> {
    return this.http.post(`${this.APIURL}ngo/location`, user);
  }
  ngoSignup(user) {
    return this.http.post(`${this.APIURL}user/ngo/register`, user); 
  }
  getAllStates(): Subscribable<any> {
    return this.http.get(`${this.APIURL}ngo/states`);
  }
  checkDomain(domain) {
    const params = new HttpParams().set('Hide-Loader', 'true');
    return this.http.post(`${this.APIURL}ngo/domain/check`, domain, {params});
  }
  verifySignupNgo(user) {
    return this.http.post(`${this.APIURL}user/ngo/register/verify`, user);
  }
  ngoLogin(user){
    return this.http.post(`${this.APIURL}user/ngo/login`, user);
  }
  ngoLoginVerification(user) {
    return this.http.post(`${this.APIURL}user/ngo/login/verify`, user);
  }
  getCountryCodeList(): Observable<any> {
    return this.http.get("assets/json/countryCode.json");
  }
  volunteerCustomLogin(user) {
    return this.http.post(`${this.APIURL}user/volunteer/login`, user);
  }
  verifyLoginVolunteer(user){
    return this.http.post(`${this.APIURL}user/volunteer/login/verify`, user);
  }
  volunteerLogin(access_token:string):Observable<any> {
    return this.http.post(`${this.APIURL}volunteer/user/facebook/signup`, {access_token});
  }
  volunteerRegister(newVolunteer){
    return this.http.post(`${this.APIURL}user/volunteer/register`, newVolunteer);
  }
  ngoLogout() {
    sessionStorage.clear();
    localStorage.clear();
    // window.location.reload();
    // this.router.navigate(['/']);
    // if (this.tokenExpirationTime) {
    //   clearTimeout(this.tokenExpirationTime);
    // }
    // this.tokenExpirationTime = null;
  }
}

