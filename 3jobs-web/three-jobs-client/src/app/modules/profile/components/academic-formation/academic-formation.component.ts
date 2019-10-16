import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/core/services/profile.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';
import { isNullOrUndefined, isNull } from 'util';
import { Experience } from 'src/app/shared/models/experience';

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
     * Experience model.
     */
    private experience: Experience;

    /**
     * Flag if the data is being edited.
     */
    isFormEdition: boolean;

    /**
     * the current experience id.
     */
    experienceIndex: number;

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
            this.profile.experiences = [];
        }

        this.isFormEdition = false;
        this.isEdition = true;

        this.currentId = this.profile.id;
        this.model = this.profile;
    }

    public academicFormationHasData() {
        return this.profile.experiences.length > 0;
    }

    public newForm() {
        this.experienceIndex = null;
        this.experience = new Experience();

        this.isFormEdition = true;
        this.isSubmitted = false;
    }

    public editForm(experience: Experience) {
        this.experienceIndex = this.profile.experiences.findIndex(e => e.id === experience.id);
        this.experience = Object.assign({}, this.profile.experiences[this.experienceIndex]);

        this.isFormEdition = true;
        this.isSubmitted = false;
    }

    public cancelForm() {
        this.isFormEdition = false;
    }

    public sendForm() {
        if (isNull(this.experienceIndex)) {
            this.model.experiences.push(this.experience);
        }
        else {
            this.model.experiences[this.experienceIndex] = this.experience;
        }

        this.onSubmit();
    }

    public remove(experienceId: number) {
        this.model.experiences.splice(this.profile.experiences.findIndex(e => e.id === experienceId), 1);

        this.onSubmit();
    }
}
