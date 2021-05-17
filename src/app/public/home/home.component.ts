import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngoWebsite: string;

  constructor(public _router: Router) {
    this.ngoWebsite= this._router.url;

   }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
  }

}
