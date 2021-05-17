import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscribable, of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { SettingService } from './setting.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NgoService {
  APIURL = environment.apiBaseUrl;
  isPostSignupDone: boolean = false;
  ngoId: any;
  httpOptions: any = {};
  setData: any = [];
  setStoryForm: any = [];
  sideBarSelectedStory = new BehaviorSubject(0);
  sideBarSelectedStoryId= new EventEmitter();
  sideBarSelectedEvent = new BehaviorSubject(0);
  sideBarSelectedEventId = new EventEmitter();
  gallaryImgs = new Subject();
  storyCount = new BehaviorSubject(0);
  eventCount = new BehaviorSubject(0);
  tokenExpirationTime: any;
  selectedIndex = new EventEmitter();
  setCurrentNgoData(ngo) {
    this.setData.length = 0; //don't touch this line.
    this.setData.push(ngo);
  }
  getCurrentNgoData(): Observable<any> {
    return of(this.setData)
  }
  setCurrentNgoStory(ngo) {
    // this.setData.length = 0;
    this.setStoryForm.push(ngo);
  }
  getCurrentNgoStory(): Observable<any> {
    return of(this.setStoryForm)
  }
  // for active sidebar
  public menuSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
  public menuActive = this.menuSubject.asObservable();
  toggleMenu(val: boolean) {
    this.menuSubject.next(val);
  }
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
  dynamicNGOData() {
    return this.http.get(`${this.APIURL}ngo/messages`, this.httpOptions);
  }
  getAllNgoCategories() {
    return this.http.get(`${this.APIURL}ngo/category/all`);
  }
  getAllNgoFacilities(): Subscribable<any> {
    const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
    const token = { headers: { 'Authorization': jwt_token } };
    return this.http.get(`${this.APIURL}ngo/facilities`, token);
  }
  saveNgoFormAllSteps(ngoAllSteps) {
    const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
    const token = { headers: { 'Authorization': jwt_token } };
    return this.http.post(`${this.APIURL}ngo/details`, ngoAllSteps, token);
  }
  getCurrentNgoDetails(): Subscribable<any> {
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    return this.http.get(`${this.APIURL}ngo/find/one`, this.httpOptions);
  } 
  ngoStory(user) {
    return this.http.post(`${this.APIURL}ngo/story`, user);
  }
  saveNgoStoryData(story) {
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    return this.http.post(`${this.APIURL}ngo/story`, story, this.httpOptions);
  }
  getAllStoryTags() {
    return this.http.get(`${this.APIURL}ngo/story/tags/find/all`, this.httpOptions);
  }
  getAllStory() {
    return this.http.get(`${this.APIURL}ngo/story/all`, this.httpOptions);
  }
  getAllStoryByNgoId(id) {
    return this.http.get(`${this.APIURL}ngo/ticket?ngo=${id}&&type=ngo story approvel`, this.httpOptions);
  }
  deleteStoryById(id) {
    return this.http.delete(`${this.APIURL}ngo/story/${id}`, this.httpOptions);
  }
  viewStoryById(id) {
    return this.http.get(`${this.APIURL}ngo/ticket/${id}`, this.httpOptions);
  }
  getEventTags() {
    return this.http.get(`${this.APIURL}ngo/event/tags/find/all`, this.httpOptions);
  }
  saveEventData(event) { 
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    return this.http.post(`${this.APIURL}ngo/event`, event, this.httpOptions);
  }
  getAllEvents() {
    return this.http.get(`${this.APIURL}ngo/event/all`, this.httpOptions);
  }
  getAllEventsByNgoId(id) {
    return this.http.get(`${this.APIURL}ngo/ticket?ngo=${id}&&type=ngo event approvel`, this.httpOptions);
  }
  deleteEventById(id) {
    return this.http.delete(`${this.APIURL}ngo/event/${id}`, this.httpOptions);
  }
  viewEventById(id) {
    return this.http.get(`${this.APIURL}ngo/ticket/${id}`, this.httpOptions);
  }
  saveGalleryImage(file) {
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    return this.http.post(`${this.APIURL}ngo/gallery`, file, this.httpOptions);
  }
  deleteGalleryImage(id) {
    return this.http.delete(`${this.APIURL}ngo/gallery/${id}`, this.httpOptions);
  }
  updateGalleryImageName(body) {
    console.log('Gallery title update', body);
    let title = {
      title: body.title
    }
    return this.http.put(`${this.APIURL}ngo/gallery/${body.id}`, title, this.httpOptions);
  }
  getAllGalleryData(){
    return this.http.get(`${this.APIURL}ngo/gallery/all`, this.httpOptions);
  }
  getAllGalleryByNgoId(id) {
    return this.http.get(`${this.APIURL}ngo/ticket?ngo=${id}&&type=ngo gallery approvel`, this.httpOptions);
  }
  getImage(imgName){
    return this.http.get(`${this.APIURL}ngo/image?key=ngo/gallery/${this.ngoId}/${imgName}`, this.httpOptions)
  }
  updateNgoLogoAndName(body) {
    return this.http.put(`${this.APIURL}ngo/${this.ngoId}`, body, this.httpOptions);
  }
  // updateFounderImage(img){
  //   return this.http.put(`${this.APIURL}ngo/${this.ngoId}/founder/image`, img, this.httpOptions);
  // }
  getFounderDetails(){
    return this.http.get(`${this.APIURL}ngo/ticket?ngo=${this.ngoId}&&type=ngo founder approvel`, this.httpOptions);
  }
  updateFounderData(founderData){
    return this.http.put(`${this.APIURL}ngo/5${this.ngoId}/founder/`, founderData, this.httpOptions);
  }
  updateNgoStory(story){
    return this.http.put(`${this.APIURL}ngo/${this.ngoId}/ngo`, story, this.httpOptions);
  }
  updateNgoDetails(details){
    return this.http.put(`${this.APIURL}ngo/${this.ngoId}`, details, this.httpOptions);
  }
  getNgoDetail(){
    return this.http.get(`${this.APIURL}ngo/ticket?ngo=${this.ngoId}&&type=ngo about and image approvel&&populates=createdBy,comments.createdBy`, this.httpOptions);
  }
  getFounder(paramsType){
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    if(JSON.parse(this.settingService.storageType.getItem('currentUser')) != null){
      const user = JSON.parse(this.settingService.storageType.getItem('currentUser'));
      this.ngoId = user.currentUser._id;
    }
    return this.http.get(`${this.APIURL}ngo/ticket?ngo=${this.ngoId}&&type=${paramsType}&&populates=createdBy,comments.createdBy`, this.httpOptions);
  }
  getNgoStory(){
    return this.http.get(`${this.APIURL}ngo/getAbout`, this.httpOptions);
  }
  onGenerateOtp(body){
    return this.http.post(`${this.APIURL}ngo/gen/otp`, body, this.httpOptions);
  }
  updateRegMobileorEmail(data){
    return this.http.put(`${this.APIURL}ngo/profile/eom`, data, this.httpOptions);
  }
  getCount(){
    if (JSON.parse(this.settingService.storageType.getItem('jwt_token')) != null) {
      const jwt_token = JSON.parse(this.settingService.storageType.getItem('jwt_token'));
      this.httpOptions = { headers: { 'Authorization': jwt_token } };
    }
    return this.http.get(`${this.APIURL}ngo/ticket/length`, this.httpOptions)
  }
  // autoLogout(expirationTime) {
  //   this.tokenExpirationTime = setTimeout(() => {
  //     this.ngoLogout();
  //   }, expirationTime)
  // }
}
