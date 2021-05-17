import { Component, OnInit } from '@angular/core';
import { NgoService } from '@common/services/ngo.service';
import { UserService } from '@common/services/user.service';
import { ProfileSidebarComponent } from '@ngo/profile-sidebar/profile-sidebar.component';

@Component({
  selector: 'app-signup-header',
  templateUrl: './signup-header.component.html',
  styleUrls: ['./signup-header.component.css'],
  providers: [ProfileSidebarComponent],
})
export class SignupHeaderComponent implements OnInit {

  headerHeight: string;
  currentNgoData: any;
  dynamicData: any;
  founderData: any;

  constructor(
    private ngoService: NgoService,
    public _profile: ProfileSidebarComponent,
    private userService: UserService
  ) { }
 
  ngOnInit(): void {
  }
  toggle() {
    this._profile.togglrBar();
  }
  ngoLogout() {
    this.userService.ngoLogout();
  }


}
