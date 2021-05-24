import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ngo-banner-info',
  templateUrl: './ngo-banner-info.component.html',
  styleUrls: ['./ngo-banner-info.component.css']
})
export class NgoBannerInfoComponent implements OnInit {
  imgUrl: string;
  @Input() profileDetails;
 cities: any[];

    selectedCity: any;

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit(): void {
    let ngoID = JSON.parse(sessionStorage.getItem('currentUser'));
    this.imgUrl = environment.imgBaseUrl + ngoID.currentUser.id;
  }

}
