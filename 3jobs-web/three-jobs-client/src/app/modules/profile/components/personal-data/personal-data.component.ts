import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { User } from 'src/app/shared/models/user';

@Component({ selector: 'personal-data', templateUrl: './personal-data.component.html' })
export class PersonalDataComponent extends MaintainForm<User> implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    @Input() isLoggedUserProfile: boolean;

    /**
     * The profile model.
     */
    @Input() user: User;

    /**
     * Flag if the data is being edited.
     */
    isFormEdition: boolean;

    /**
     * The default constructor.
     * 
     * @param userService profile service.
     * @param router router for nagivation.
     * @param toastr toastr service.
     * @param spinnerService spinner service.
     * @param datePipe date pipe.
     */
    constructor(userService: UserService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService, private datePipe: DatePipe) {
        super(userService, router, toastr, spinnerService);
    }

    ngOnInit() {
        this.isFormEdition = false;
        this.isEdition = true;

        this.model = this.user;
        
        this.getCurrentId();
    }
}