import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    user: any = {};
    constructor(private router: Router, private userService: UserService) {
    }
    canActivate(): Observable<boolean> {
        this.user = this.userService.user;
        if (!(this.user.isAuthenticate)) {
            this.router.navigate(['/']);
            return of(false);
        } else {
            return of(true);
        }
    }

}

