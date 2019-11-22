import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';

@Component({ selector: 'app-config', templateUrl: './config.component.html', })
export class ConfigComponent extends MaintainForm<Profile> implements OnInit {

    /**
     * Default constructor
     *
     * @param profileService profile service
     * @param router router service
     * @param toastrService toastr service
     * @param authService auth service
     */
    constructor(private profileService: ProfileService, router: Router, toastrService: ToastrService, private authService: AuthService) {
        super(profileService, router, toastrService);
    }

    ngOnInit() {
        this.model = new Profile();
        this.isEdition = true;
        this.loadProfile();
    }

    /**
     * Method responsible to load the current user data
     */
    private loadProfile() {
        this.profileService.read(this.authService.getUser().profileId).subscribe(response => {
            this.model = response;
            this.currentId = this.model.id;
        });
    }

}
