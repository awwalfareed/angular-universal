import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscribable, of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { SettingService } from './setting.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class QauseService {
  APIURL = environment.apiBaseUrl;
  ngoId: any;
  httpOptions: any = {};
  constructor(private http: HttpClient, private router: Router, private settingService: SettingService) {
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    if(JSON.parse(this.settingService.storageType.getItem('currentUser')) != null){
      const user = JSON.parse(this.settingService.storageType.getItem('currentUser'));
      this.ngoId = user.currentUser._id;
    }
  }
  getHomeJSON(): Observable<any> {
    return this.http.get("assets/json/home/home.json");
  }
  getSimilarNGOs(cate, state): Observable<any> {
    return this.http.post(`${this.APIURL}v1/view/ngo/similer?category=${cate}&&state=${state}`, this.httpOptions);
  }
  getNgoProfileInfo(ngoWesbite) {
    return this.http.get(`${this.APIURL}v1/view/ngo/${ngoWesbite}/profile`);
  }
  getPreviewNgoProfileInfo(ngoId) {
    return this.http.get(`${this.APIURL}v1/preview/ngo/${ngoId}`);
  }
  getUnmaskDetail(name){
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    return this.http.get(`${this.APIURL}v1/view/ngo/${name}/profile/pem`, this.httpOptions);
  }
}
