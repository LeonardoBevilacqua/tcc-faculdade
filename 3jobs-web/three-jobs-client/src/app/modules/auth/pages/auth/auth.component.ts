import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { isNullOrUndefined } from 'util';
import { User } from 'src/app/shared/models/user';

@Component({ selector: 'app-auth', templateUrl: './auth.component.html' })
export class AuthComponent {

    private userId: number;
    private token: string;
    private isActivated: boolean;

    constructor(private router: Router, private userService: UserService, private authService: AuthService) {
        const urlPath = this.router.url.split('/');

        this.userId = urlPath[2] ? +urlPath[2] : 0;
        this.token = urlPath[3] ? urlPath[3] : '';
        this.isActivated = null;

        this.activateUser();
    }

    private activateUser() {
        this.userService.activateUser(this.userId).subscribe(
            (response) => {

                if (!isNullOrUndefined(this.token) && !isNullOrUndefined(response.user)) {
                    const user: User = response.user;
                    this.isActivated = true;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('userToken', JSON.stringify({ email: user.email, token: this.token }));

                    // store user;
                    this.authService.setUser(user);
                }

            },
            (error) => {
                this.isActivated = false;
            }
        );
    }
}
