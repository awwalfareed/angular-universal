import { Component, Input, OnInit } from '@angular/core';
// import Swiper core and required components
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
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() profileDetails;
  galleryData: any;
  playVideo: boolean;

  constructor() { }

  ngOnInit(): void {
    this.galleryData = this.profileDetails.images.secondary
  }

}
