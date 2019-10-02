import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/core/services/profile.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';
import { isNullOrUndefined } from 'util';

@Component({ selector: 'abilities', templateUrl: './abilities.component.html', })
export class AbilitiesComponent extends MaintainForm<Profile> implements OnInit {

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
    // TODO
    descriptionSkill: string;
    // TODO
    constructor(profileService: ProfileService, router: Router, toastr: ToastrService) {
        super(profileService, router, toastr);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.profile)) {
            this.profile = new Profile();
            this.profile.skills = [];
        }
        this.isFormEdition = false;
        this.isEdition = true;

        this.descriptionSkill = '';
    }

    public addSkill() {
        // this.profile.skills.push({description: this.descriptionSkill, id: this.profile.skills.length+1});
        this.descriptionSkill = '';
    }

    public deleteSkill(skillId: number) {
        const index = this.profile.skills.findIndex(s => s.id === skillId);
        this.profile.skills.splice(index, 1);
    }
}
