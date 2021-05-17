import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  storageType:any = sessionStorage;
  constructor() {
    if(localStorage.getItem('currentUser')){
      this.storageType = localStorage;
    } else{
      this.storageType = sessionStorage;
    }
  }

  changeStorageType(type: any) {
    console.log('setti==>',type);
    this.storageType = type;
    console.log('changeStorageType', (String(this.storageType)));
  }
}
