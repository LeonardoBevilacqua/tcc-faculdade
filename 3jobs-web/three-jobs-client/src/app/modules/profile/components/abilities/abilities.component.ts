import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'abilities', templateUrl: './abilities.component.html', })
export class AbilitiesComponent implements OnInit {

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
    }

}
