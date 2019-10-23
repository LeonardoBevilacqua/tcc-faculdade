import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/core/services/profile.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';
import { isNullOrUndefined } from 'util';
import { Skill } from 'src/app/shared/models/skill';
import { HttpErrorResponse } from '@angular/common/http';

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
     * Skill model.
     */
    skill: Skill;

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
        private profileService: ProfileService,
        router: Router,
        toastr: ToastrService) {
        super(profileService, router, toastr);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.profile)) {
            this.profile = new Profile();
            this.profile.skills = [];
        }
        this.isFormEdition = false;
        this.isEdition = true;

        this.currentId = this.profile.id;
        this.model = this.profile;

        this.skill = new Skill();
    }

    public abilitiesHasData() {
        return this.profile.skills.length > 0;
    }

    public addSkill() {
        this.model.skills.push(this.skill);

        this.onSubmit();

        this.skill = new Skill();
    }

    public deleteSkill(skillId: number) {
        this.model.skills.splice(this.profile.skills.findIndex(s => s.id === skillId), 1);

        this.onSubmit();
    }

    // private onSubmit(redirectPath: string = null) {
    //     this.isSubmitted = false;

    //     // If current id matches the model id
    //     if (this.currentId === this.model.id) {
    //         this.profileService.update(this.model).subscribe(
    //             (response: any) => {
    //                 this.toastr.success(response.message ? response.message : 'Informações atualizadas com sucesso!');

    //                 this.isSubmitted = true;

    //                 if (redirectPath) {
    //                     this.router.navigateByUrl(redirectPath);
    //                 }
    //             },
    //             (error: HttpErrorResponse) => this.errorHandler(error)
    //         );
    //     }
    // }
}
