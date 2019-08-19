import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/shared/models/address';

@Component({ selector: 'user-address', templateUrl: './user-address.component.html' })
export class UserAddressComponent implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    @Input() isLoggedUserProfile: boolean;

    /**
     * The profile's address.
     */
    @Input() address: Address;

    /**
     * Flag if the data is being edited.
     */
    isFormEdition: boolean;

    constructor() { }

    ngOnInit() {
        this.isFormEdition = false;
    }

}
