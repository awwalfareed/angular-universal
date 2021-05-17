import { Injectable } from '@angular/core';
import {User} from '../models/Ngo';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  volunteer: User = {
    isAuthenticate: false,
    currentUser: {},
    loading: false
  }
  public newUser: any = {};
  public newNgo: any = {};
  // constructor(private http: HttpClient, private router: Router, private settingService:SettingService) {
  //   if (JSON.parse(this.settingService.storageType.getItem('currentUser')) != null) {
  //     this.user = JSON.parse(this.settingService.storageType.getItem('currentUser'));
  //   }
  // }
}
