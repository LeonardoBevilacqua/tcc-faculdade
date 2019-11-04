import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

/**
 * Component responsible to display and handle the header of the page.
 */
@Component({ selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.scss'] })
export class HeaderComponent{
    constructor(private authService: AuthService, private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }

    isUserLogged(): boolean {
        return !isNullOrUndefined(this.authService.getToken());
    }
}
