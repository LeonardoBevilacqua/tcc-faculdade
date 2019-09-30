import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/core/services/profile.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';
import { User } from 'src/app/shared/models/user';
import { isNullOrUndefined } from 'util';

@Component({ selector: 'personal-data', templateUrl: './personal-data.component.html' })
export class PersonalDataComponent extends MaintainForm<Profile> implements OnInit {

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

    /**
     * The default constructor.
     *
     * @param profileService profile service.
     * @param router router for nagivation.
     * @param toastr toastr service.
     * @param spinnerService spinner service.
     */
    constructor(
        profileService: ProfileService,
        router: Router,
        toastr: ToastrService,
        spinnerService: Ng4LoadingSpinnerService) {
        super(profileService, router, toastr, spinnerService);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.profile)) {
            this.profile = new Profile();
        }

        this.isFormEdition = false;
        this.isEdition = true;

        this.model = this.profile;

        this.currentId = this.profile.id;
    }
}
