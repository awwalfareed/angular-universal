import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qause-help',
  templateUrl: './qause-help.component.html',
  styleUrls: ['./qause-help.component.css']
})
export class QauseHelpComponent implements OnInit {
    slideritems : any = 6;
    constructor() { }

  ngOnInit(): void {
    var windowwidth = window.innerWidth;
    if (windowwidth <= 1600 && windowwidth > 1440){
      this.slideritems=3;
    }
    if (windowwidth <= 1024 && windowwidth > 991){
      this.slideritems=3;
    }
    if (windowwidth <= 991 && windowwidth > 767){
      this.slideritems=2;
    }
    if (windowwidth <= 736){
      this.slideritems=2;
    }

    if (windowwidth <= 576){
      this.slideritems=1;
    }
}

  }
