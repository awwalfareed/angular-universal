import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NgoService } from "../services/ngo.service";

@Injectable()
export class NgoFormGuard implements CanActivate {
  constructor(private router: Router, private ngoService: NgoService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (sessionStorage.getItem('cnd') != null) {
        let response = JSON.parse(atob(sessionStorage.getItem('cnd')));
        if (response.isPostSignupComplete) {
          return this.router.navigate(['/ngobackend/dashboard']);
        }
        if (!response.isPostSignupComplete) {
          resolve(true);
        }
      }
    })
  }
}
