import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'personal-data', templateUrl: './personal-data.component.html', styleUrls: ['../components.scss'] })
export class PersonalDataComponent implements OnInit {

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
