import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanyou-donation',
  templateUrl: './thanyou-donation.component.html',
  styleUrls: ['./thanyou-donation.component.css']
})
export class ThanyouDonationComponent implements OnInit {
  selectedCity2: any;

  constructor() {
    this.selectedCity2 = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
  }

}
