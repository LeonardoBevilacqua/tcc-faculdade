import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/core/services/profile.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';
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
     * Old profile model.
     */
    private oldModel: Profile;

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
     */
    constructor(
        profileService: ProfileService,
        router: Router,
        toastr: ToastrService) {
        super(profileService, router, toastr);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.profile)) {
            this.profile = new Profile();
        }

        this.isFormEdition = false;
        this.isEdition = true;

        this.currentId = this.profile.id;
    }

    public personalDataHasData() {
        return this.profile.dateOfBirth ||
            this.profile.maritalStatus ||
            this.profile.nationality;
    }

    public editForm() {
        this.model = this.profile;
        this.oldModel = Object.assign({}, this.profile);

        this.isFormEdition = true;
        this.isSubmitted = false;
    }

    public cancelForm() {
        this.profile = this.oldModel;

        this.isFormEdition = false;
    }
}
