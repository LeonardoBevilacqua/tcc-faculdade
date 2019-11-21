import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DirectAccessUrlService } from '../services/direct-access-url.service';

@Injectable()
export class DirectAccessUrlGuard implements CanActivate {


    constructor(private router: Router,
        private directAccessUrlService: DirectAccessUrlService) { }

    canActivate() {
        if (this.directAccessUrlService.getAllow()) {
            this.directAccessUrlService.setAllow(false);
            return true;
        } else {
            this.router.navigateByUrl('/');
            return false;
        }
    }




}