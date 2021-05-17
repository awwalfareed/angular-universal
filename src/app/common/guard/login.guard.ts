import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {
    user: any = {};
    constructor(private router: Router, private userService: UserService) {
        this.user = this.userService.user;
    }
    canActivate() {
        if (this.user.isAuthenticate) {
            this.router.navigate(['/ngobackend/dashboard']);
            return false;
        } else {
            return true;
        }
    }
};
