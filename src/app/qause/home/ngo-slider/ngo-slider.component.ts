import { Component, OnInit } from '@angular/core';
// import { QauseService } from '@common/services/qause.service';
@Component({
  selector: 'app-ngo-slider',
  templateUrl: './ngo-slider.component.html',
  styleUrls: ['./ngo-slider.component.css']
})
export class NgoSliderComponent implements OnInit {
  ngoSlider: any;
  constructor() { }


  ngOnInit(): void {
    // this.qauseService.getHomeJSON().subscribe(shazli=>{
    //   this.ngoSlider = shazli.ngoSlider;
    //   console.log(this.ngoSlider);
    // })
    
  }

}
