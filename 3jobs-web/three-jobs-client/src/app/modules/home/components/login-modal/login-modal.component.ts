import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { User } from 'src/app/shared/models/user';

declare const $: any;

/**
 * Class responsible to handle the login modal.
 */
@Component({ selector: 'app-login-modal', templateUrl: './login-modal.component.html' })
export class LoginComponent extends MaintainForm<User> implements OnInit {

    /**
     * Default constructor
     * @param authService Auth service.
     * @param router Router service for navigation.
     * @param toastr The toastr service for notifications.
     * @param spinnerService The spinner service.
     */
    constructor(private authService: AuthService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) {
        super(null, router, toastr, spinnerService);
    }

    ngOnInit() {
        this.model = new User();
    }

    /**
     * Method responsible to make the login to the system.
     */
    public login() {
        // show a spinner
        this.spinnerService.show();
        // call the auth service passing the user information
        this.authService.login(this.model)
            .subscribe(
                // server is responding
                result => {
                    // check if was successful
                    if (result) {
                        // hide the spinner and modal and redirect
                        this.spinnerService.hide();
                        $('#loginModal').modal('hide')
                        this.router.navigateByUrl('/dashboard');
                    }
                    else {
                        // hide the spinner and notify the error
                        this.spinnerService.hide();
                        this.toastr.error('Email ou senha incorreto!');
                    }
                },
                // server is not working
                (responseError: HttpErrorResponse) => {
                    // TODO: remove this
                    let error = responseError.status != 0 ? JSON.parse(responseError.error.trim().slice(0, -1) + '}') : null;

                    const message = error && error.message ? error.message : 'Falha ao tentar se conectar!';
                    // hide the spinner and notify the error
                    this.spinnerService.hide();
                    this.toastr.error(message);
                }
            );
    }

}
