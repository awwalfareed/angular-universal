import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
} from "swiper/core";
// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
]);

@Component({
  selector: 'app-volunteer-slider',
  templateUrl: './volunteer-slider.component.html',
  styleUrls: ['./volunteer-slider.component.css']
})
export class VolunteerSliderComponent implements OnInit {
  slideritems : any = 3;
  constructor() { }

  ngOnInit(): void {
    var windowwidth = window.innerWidth;
    if (windowwidth <= 1920 && windowwidth > 1600){
      this.slideritems=3;
    }
    if (windowwidth <= 1024 && windowwidth > 991){
      this.slideritems=2;
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
