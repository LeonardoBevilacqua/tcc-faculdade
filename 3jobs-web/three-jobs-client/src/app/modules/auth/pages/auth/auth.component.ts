import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({ selector: 'app-auth', templateUrl: './auth.component.html' })
export class AuthComponent {

    private userId: number;
    private token: number;
    private isActivated: boolean;

    constructor(private router: Router, private userService: UserService) {
        const urlPath = this.router.url.split('/');

        this.userId = urlPath[2] ? +urlPath[2] : 0;
        this.token = urlPath[3] ? +urlPath[3] : 0;
        this.isActivated = null;

        this.activateUser();
    }

    private activateUser() {
        this.userService.activateUser(this.userId).subscribe(
            (response) => {
                this.isActivated = true;
            },
            (error) => {
                this.isActivated = false;
            }
        );
    }
}
