import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qause-header',
  templateUrl: './qause-header.component.html',
  styleUrls: ['./qause-header.component.css']
})
export class QauseHeaderComponent implements OnInit {
  sidemenu: boolean = false;
  navToggle = '';
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.sidemenu = !this.sidemenu;
    if(this.sidemenu){
      this.navToggle = 'open';
    }
    else{
      this.navToggle = '';
    }
  }
}
