import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/shared/models/profile';

@Component({ selector: 'user-address', templateUrl: './user-address.component.html' })
export class UserAddressComponent extends MaintainForm<Profile> implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    @Input() isLoggedUserProfile: boolean;

    /**
     * The profile.
     */
    @Input() profile: Profile;

    /**
     * Flag if the data is being edited.
     */
    isFormEdition: boolean;

    constructor(profileService: ProfileService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) {
        super(profileService, router, toastr, spinnerService);
    }

    ngOnInit() {
        this.isFormEdition = false;
        this.isEdition = true;
        
        this.model = this.profile;

        this.getCurrentId();
    }

}
