import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { User } from 'src/app/shared/models/user';
import { Address } from 'src/app/shared/models/address';
import { isNullOrUndefined } from 'util';
import { Profile } from 'src/app/shared/models/profile';

@Component({ selector: 'user-address', templateUrl: './user-address.component.html' })
export class UserAddressComponent extends MaintainForm<User> implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    @Input() isLoggedUserProfile: boolean;

    /**
     * The user.
     */
    @Input() user: User;

    /**
     * Flag if the data is being edited.
     */
    isFormEdition: boolean;

    constructor(userService: UserService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) {
        super(userService, router, toastr, spinnerService);
    }

    ngOnInit() {
        if (isNullOrUndefined(this.user)) {
            this.user = new User();
            this.user.profile = new Profile();
        }

        this.isFormEdition = false;
        this.isEdition = true;

        this.model = this.user;

        if (!this.model.profile.address) {
            this.model.profile.address = new Address();
        }

        this.getCurrentId();
    }
}
