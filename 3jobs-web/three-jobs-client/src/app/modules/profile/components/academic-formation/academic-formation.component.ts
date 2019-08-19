import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'academic-formation', templateUrl: './academic-formation.component.html' })
export class AcademicFormationComponent implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    @Input() isLoggedUserProfile: boolean;

    /**
     * Flag if the data is being edited.
     */
    isFormEdition: boolean;

    constructor() { }

    ngOnInit() {
        this.isFormEdition = false;
    }

}
