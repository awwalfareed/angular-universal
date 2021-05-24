import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { QauseService } from '@common/services/qause.service';

@Component({
    selector: 'app-ngo-profile',
    templateUrl: './ngo-profile.component.html',
    styleUrls: ['./ngo-profile.component.css']
})
export class NgoProfileComponent implements OnInit {
  profileDetails: any;
  ngoId: string;
  ngoWebsite: string;
  notFound: boolean = false;
  previewNgoID: string;
  constructor(
    public _router: Router,
    private activatedRoute: ActivatedRoute,
    // public qauseSerive:QauseService
    ) {          
      this.ngoWebsite = this.activatedRoute.snapshot.url[0].path;
      if(this.activatedRoute.snapshot.url[0].path === 'preview'){
          this.previewNgoID= this.activatedRoute.snapshot.url[1].path;
        }
    }

  ngOnInit(): void {
    this.getCurrentNGOData();
    this.getProfileData();
  }
  getCurrentNGOData(){
    // get Current NGO Details
    // if(sessionStorage.getItem('cnd') != null){
    //   let response = JSON.parse(atob(sessionStorage.getItem('cnd'))); // check country code also
    //   this.ngoId =response._id
    // }
  }
  // Get NGO Profile By Id
  getProfileData(){
    if(!this.previewNgoID){
      // this.qauseSerive.getNgoProfileInfo(this.ngoWebsite).subscribe((data:any)=>{
      //   if(data.success){
      //     this.profileDetails = data.data;
      //     sessionStorage.setItem('nc',this.profileDetails.category.name);
      //     sessionStorage.setItem('ns',this.profileDetails.address.state);
      //   }
      // },err=>{
      //   if (!err.error.success) {
      //     this.notFound = true;
      //   }
      // })
    }else if(this.previewNgoID){
      // this.qauseSerive.getPreviewNgoProfileInfo(this.previewNgoID).subscribe((data:any)=>{
      //   if(data.success){
      //     this.profileDetails = data.data;
      //   }
      // },err=>{
      //   if (!err.error.success) {
      //     this.notFound = true;
      //   }
      // })
    }
  }

}
