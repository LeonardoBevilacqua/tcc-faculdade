import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'user-address', templateUrl: './user-address.component.html', styleUrls: ['../components.scss'] })
export class UserAddressComponent implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    @Input() isLoggedUserProfile: boolean;

    /**
     * Flag if the data is being edited.
     */
    isEdition: boolean;

    constructor() { }

    ngOnInit() {
        this.isEdition = false;
    }

}
