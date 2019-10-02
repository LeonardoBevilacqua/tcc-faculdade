import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';
import { isNullOrUndefined } from 'util';

@Component({ selector: 'academic-formation', templateUrl: './academic-formation.component.html' })
export class AcademicFormationComponent extends MaintainForm<Profile> implements OnInit {

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

    /**
     * the current experience id.
     */
    experienceIndex: number;

    // TODO
    constructor(router: Router, toastr: ToastrService) {
        super(null, router, toastr);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.profile)) {
            this.profile = new Profile();
            this.profile.experiences = [];
        }

        this.isFormEdition = false;
        this.isEdition = true;

        this.model = this.profile;
    }

    public openForm(experienceId: number) {
        this.isFormEdition = true;
        this.experienceIndex = this.profile.experiences.findIndex(e => e.id === experienceId);
    }

}
