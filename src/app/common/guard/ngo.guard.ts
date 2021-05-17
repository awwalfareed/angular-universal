import {Injectable} from '@angular/core';
import {CanActivate, Router, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class NgoGuard implements CanActivate {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
    constructor( private router:Router, private userService: UserService){
      this.currentUrl = this.router.url;
      // this.user = this.userService.user;
      router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {        
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.url;
          };
        });
        console.log('this.previous url', this.previousUrl);
    }
    canActivate(){
      return true;
    }
};
