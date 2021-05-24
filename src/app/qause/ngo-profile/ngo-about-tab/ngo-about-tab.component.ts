import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QauseService } from '@common/services/qause.service';
import { UserService } from '@common/services/user.service';
import { select, Store } from '@ngrx/store';
import { DialogService, DynamicDialogRef } from 'primeng';
import { NGOVolunteerLoginDialogueComponent } from './dialogue/ngo-volunteer-login/ngo-volunteer-login.component';
// import { RegisterDialogueComponent } from './register-dialogue/register-dialogue.component';
import * as fromUser from '@stateManagement/reducers/user.reducer';
import { Observable } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { QauseComponent } from '../../qause.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ngo-about-tab',
  templateUrl: './ngo-about-tab.component.html',
  styleUrls: ['./ngo-about-tab.component.css'],
  providers: [DialogService, QauseComponent]
})
export class NgoAboutTabComponent implements OnInit {
  imgUrl: string;
  @Output() isLoggedIn = new EventEmitter<any>();
  @Input() profileDetails;
  ref: DynamicDialogRef;
  checkUser: any;
  ngoWebsite: string;
  unmaskContactDetail: any;
  isMask: boolean=false;
  gettoken: any;
  isRefresh: boolean=false;
  isUserLoggedIn: boolean=false;

  constructor(
    public dialogService: DialogService,
    public qauseServ:QauseService,
    public userService:UserService,
    public activatedRoute: ActivatedRoute,
    public router:Router,
    private store: Store,
    private actions$: Actions,
    private qauseComp:QauseComponent

  ) {
    this.actions$.pipe(ofType('SET_TOKEN')).subscribe((data:any) => {
      if(data.payload.success){
        this.gettoken = data;
        this.userService.setCurrentUser(this.gettoken.payload);
        this.ngoWebsite= this.activatedRoute.snapshot.url[0].path;
        this.qauseServ.getUnmaskDetail(this.ngoWebsite).subscribe(async(data:any)=>{
          if(data.success){
            this.isMask = true;
            this.isRefresh = true;
            this.isUserLoggedIn = true;
            this.unmaskContactDetail= await data.data;
            this.qauseComp.getCurrentNGODetails();
          };
        });
      }
    })
  }

  ngOnInit(): void {
    let ngoID = JSON.parse(sessionStorage.getItem('currentUser'));
    this.imgUrl = environment.imgBaseUrl + ngoID.currentUser.id;
    this.getCurrentNGODetails()
  }
  getCurrentNGODetails() {
      this.checkUser = this.userService.user;
      if (this.checkUser.isAuthenticate) {
        this.isUserLoggedIn = true;
      } else if (!this.checkUser.isAuthenticate){
        this.isRefresh = true;
        this.isUserLoggedIn = false;
    };
  };
  getUnmask() {
    this.ngoWebsite= this.activatedRoute.snapshot.url[0].path;
    this.checkUser = this.userService.user;
    if(this.checkUser.isAuthenticate){
      this.qauseServ.getUnmaskDetail(this.ngoWebsite).subscribe((data:any)=>{
        if(data.success){
          this.isRefresh = true;
          this.isMask = true;
          this.unmaskContactDetail = data.data;
          console.log('==>',this.unmaskContactDetail)
        };
      });
    };
  }
  show() {
    this.ref = this.dialogService.open(NGOVolunteerLoginDialogueComponent, {
        contentStyle: {"max-height": "100%", "overflow": "auto" , "width" : "100%"},
        baseZIndex: 10000
    });
}

// ngOnDestroy() {
//     if (this.ref) {
//         this.ref.close();
//     }
// }
}
