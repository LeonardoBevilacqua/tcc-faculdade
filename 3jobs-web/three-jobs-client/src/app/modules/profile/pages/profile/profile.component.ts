import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({ selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss'] })
export class ProfileComponent implements OnInit {

    /**
     * Flag if is the user of the logged user.
     */
    isLoggedUserProfile: boolean;

    /**
     * The user model.
     */
    user: User;
    constructor(
        private titleService: Title,
        private userService: UserService,
        private router: Router,
        private toast: ToastrService,
        private spinnerService: Ng4LoadingSpinnerService) {
        this.user = new User();
    }

    ngOnInit() {
        // set the page title
        this.titleService.setTitle(`3Jobs | Perfil`);

        this.spinnerService.show();

        this.isLoggedUserProfile = true;

        // get the current path id if exists
        const currentId = +this.router.url.split('/')[2];

        this.userService.read(currentId).subscribe(
            (user: User) => {
                this.user = user;
                // TODO: REMOVE THIS
                this.user.roles = [];

                this.spinnerService.hide();
            },
            (error: HttpErrorResponse) => {
                this.spinnerService.hide();

                if (error.status === 404) {
                    this.toast.error('O usuário que está tentando buscar não existe!');
                }
                else if (error.status === 401) {
                    this.toast.error(error.error.error);
                }
                else {
                    this.toast.error('Ocorreu um erro inesperado, por favor aguarde!');
                }
                this.router.navigateByUrl('/');
            }
        );
    }

}
