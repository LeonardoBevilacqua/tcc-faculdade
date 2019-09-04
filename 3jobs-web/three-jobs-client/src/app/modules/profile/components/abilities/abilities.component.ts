import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/shared/models/profile';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Skill } from 'src/app/shared/models/skill';

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

    descriptionSkill: string;

    /**
     * 
     * @param profileService 
     * @param router 
     * @param toastr 
     * @param spinnerService 
     */
    constructor(profileService: ProfileService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) {
        super(profileService, router, toastr, spinnerService)
    }

    ngOnInit() {
        this.isFormEdition = false;
        this.isEdition = true;

        this.descriptionSkill = '';
    }

    public addSkill() {
        //this.profile.skills.push({description: this.descriptionSkill, id: this.profile.skills.length+1});
        this.descriptionSkill = '';
    }

    public deleteSkill(skillId: number) {
        const index = this.profile.skills.findIndex(s => s.id === skillId);
        this.profile.skills.splice(index, 1);
    }
}
