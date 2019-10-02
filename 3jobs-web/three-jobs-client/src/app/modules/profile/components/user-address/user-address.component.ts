import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/core/services/profile.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Address } from 'src/app/shared/models/address';
import { Profile } from 'src/app/shared/models/profile';
import { isNullOrUndefined } from 'util';

@Component({ selector: 'user-address', templateUrl: './user-address.component.html' })
export class UserAddressComponent extends MaintainForm<Profile> implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    @Input() isLoggedUserProfile: boolean;

    /**
     * The profile model.
     */
    @Input() profile: Profile;

    /**
     * Flag if the data is being edited.
     */
    isFormEdition: boolean;

    constructor(profileService: ProfileService, router: Router, toastr: ToastrService) {
        super(profileService, router, toastr);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.profile)) {
            this.profile = new Profile();
        }

        this.isFormEdition = false;
        this.isEdition = true;

        this.model = this.profile;

        if (!this.model.address) {
            this.model.address = new Address();
        }

        this.currentId = this.profile.id;
    }
}
