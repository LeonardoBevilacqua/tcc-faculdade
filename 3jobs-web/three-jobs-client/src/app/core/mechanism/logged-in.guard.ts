import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(): boolean {
        if (!this.authService.getToken()) {
            return true;
        }

        this.router.navigateByUrl('/dashboard');
        return false;
    }
}
