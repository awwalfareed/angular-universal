import { Injectable, NgZone } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AutoLogOutService {

  constructor(
    private ngZone: NgZone,
    private userServ: UserService
  ) {
    this.check();
    // this.initListener();
    this.initInterval();
  }

  // initListener(){
  //   this.ngZone.runOutsideAngular(() => {
  //     document.body.addEventListener('click', () => this.reset());
  //   });
  // }

  initInterval() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.check();
      }, 1000);
    })
  }

  // reset(){
  //   this.lastAction = Date.now();
  // }

  check() {
    const now = Date.now();
    const diff = this.userServ.expirationDuration - now;
    const isTimeout = diff < 0;

    this.ngZone.run(() => {
      if (isTimeout && this.userServ.isLoggedIn) {
        this.userServ.ngoLogout();
      }
    });
  }

}
