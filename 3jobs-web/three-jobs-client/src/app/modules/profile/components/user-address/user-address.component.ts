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
    constructor(profileService: ProfileService, router: Router, toastr: ToastrService) {
        super(profileService, router, toastr);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.profile)) {
            this.profile = new Profile();
        }

        this.isFormEdition = false;
        this.isEdition = true;

        if (!this.profile.address) {
            this.profile.address = new Address();
        }

        this.currentId = this.profile.id;
    }

    public userAddressHasData() {
        return this.profile.address.zipCode ||
            this.profile.address.state ||
            this.profile.address.city ||
            this.profile.address.district ||
            this.profile.address.name;
    }

    public editForm() {
        this.model = this.profile;
        this.oldModel = Object.assign({}, this.profile);
        this.oldModel.address = Object.assign({}, this.profile.address);

        this.isFormEdition = true;
        this.isSubmitted = false;
    }

    public cancelForm() {
        this.profile = this.oldModel;

        this.isFormEdition = false;
    }
}
