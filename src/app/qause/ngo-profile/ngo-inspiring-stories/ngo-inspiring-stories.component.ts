import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Stories} from 'src/app/common/models/qause/profile'
import SwiperCore, {Navigation,Pagination,Scrollbar,A11y} from 'swiper/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery-9';
import { environment } from 'src/environments/environment';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-ngo-inspiring-stories',
  templateUrl: './ngo-inspiring-stories.component.html',
  styleUrls: ['./ngo-inspiring-stories.component.css'],
})
export class NgoInspiringStoriesComponent implements OnInit {
  imgUrl: string;
  @Input() profileDetails;
  ngoStories: Stories[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  viewStoryData: any;
  count: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.imgUrl = environment.imgBaseUrl;
    this.ngoStories = this.profileDetails.stories;
    this.viewStory(this.profileDetails.stories[0]);
  }
  @ViewChild('itemTemplate1') itemTemplate1: TemplateRef<any>;

  viewStory(data){
    this.viewStoryData = data;
    this.galleryOptions = [
      {
          width: '520px',
          height: '520px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          thumbnailsPercent: 20
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '350px',
          imagePercent: 65,
          thumbnailsPercent: 20,
          thumbnailMargin: 10
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    if(data.image.secondary.length == 3){
      this.galleryImages = [
        {
          small: `${this.imgUrl}${this.profileDetails._id}story/${data.image.primary}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`
        },
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`
        },
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[1]}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[1]}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[1]}`
        },
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[2]}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[2]}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[2]}`
        },
        ];
    }
    else if(data.image.secondary.length == 2){
      this.galleryImages = [
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`
        },
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`
        },
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[1]}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[1]}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[1]}`
        }
        ];
    }
    else if(data.image.secondary.length == 1){
      this.galleryImages = [
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.primary}`
        },
        {
          small: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`,
          medium: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`,
          big: `${this.imgUrl}${this.profileDetails._id}/story/${data.image.secondary[0]}`
        }
        ];
    }
  }

  prev(){

  }
  next(){
  
  }
}
