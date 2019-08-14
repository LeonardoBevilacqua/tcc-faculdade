import { Component, OnInit } from '@angular/core';

@Component({ selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss'] })
export class ProfileComponent implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    isLoggedUserProfile: boolean;
    constructor() { }
  
    ngOnInit() {
        this.isLoggedUserProfile = true;        
    }

}
