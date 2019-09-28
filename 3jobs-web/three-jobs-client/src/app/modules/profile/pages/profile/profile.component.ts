import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/shared/models/profile';

@Component({ selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss'] })
export class ProfileComponent implements OnInit {

    /**
     * Flag if is the user of the logged user.
     */
    isLoggedUserProfile: boolean;

    currentId: number;

    /**
     * The profile mode.
     */
    profile: Profile;

    constructor(
        private titleService: Title,
        private profileService: ProfileService,
        private router: Router,
        private toast: ToastrService,
        private spinnerService: Ng4LoadingSpinnerService) {
        // get the current path id if exists
        this.currentId = +this.router.url.split('/')[2];

        if (isNaN(this.currentId)) {
            // set the user
            this.currentId = JSON.parse(localStorage.getItem('user')).user.profileId;
            this.isLoggedUserProfile = true;
        }
        else {
            const localStorageProfileId: number = JSON.parse(localStorage.getItem('user')).user.profileId;
            this.isLoggedUserProfile = this.currentId === localStorageProfileId;
        }
    }

    ngOnInit() {
        // set the page title
        this.titleService.setTitle(`3Jobs | Perfil`);

        this.spinnerService.show();





        this.profileService.read(this.currentId).subscribe(
            (profile: Profile) => {
                this.profile = profile;

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
