import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NgoService } from '../services/ngo.service';

@Injectable({
  providedIn: 'root'
})
export class NgoStoryGuard implements CanActivate {
  constructor(private ngoService: NgoService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (sessionStorage.getItem('cnd') != null) {
        let response = JSON.parse(atob(sessionStorage.getItem('cnd')));
        if (!response.isPostSignupComplete) {
          return this.router.navigate(['/signupform/step1']);
        }
        if (response.isPostSignupComplete) {
          resolve(true);
        }
      }
    })
  }

}
