import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css']
})
export class AssociationsComponent implements OnInit {
  slideritems : any = 3;
  constructor() { }

  ngOnInit(): void {
    var windowwidth = window.innerWidth;
    if (windowwidth <= 1024 && windowwidth > 991){
      this.slideritems=2;
    }
    if (windowwidth <= 991 && windowwidth > 767){
      this.slideritems=2;
    }
    if (windowwidth <= 736){
      this.slideritems=1;
    }

    if (windowwidth <= 576){
      this.slideritems=1;
    }
  }

}
