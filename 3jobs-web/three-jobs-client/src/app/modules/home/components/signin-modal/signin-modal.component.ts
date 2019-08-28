import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { User } from 'src/app/shared/models/user';

@Component({ selector: 'app-signin-modal', templateUrl: './signin-modal.component.html' })
export class SignInComponent extends MaintainForm<User> implements OnInit {

    constructor(private authService: AuthService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) {
        super(null, router, toastr, spinnerService);
    }

    ngOnInit() {
        this.model = new User();
    }

    public signIn() {
        this.spinnerService.show();

        this.authService.signIn(this.model)
            .subscribe(
                result => {
                    if (result) {
                        this.spinnerService.hide();
                        this.router.navigate(['/dashboard'])
                    }
                    else {
                        this.spinnerService.hide();
                        this.toastr.error("Email ou senha incorreto!");
                    }
                },
                () => {
                    this.spinnerService.hide();
                    this.toastr.error("Falha ao se comunicar com o servidor!");
                }
            );
    }

}
