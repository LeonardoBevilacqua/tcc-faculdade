import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({ selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss'] })
export class ProfileComponent implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    isLoggedUserProfile: boolean;
    
    constructor(private titleService: Title) { }
  
    ngOnInit() {
        // set the page title
        this.titleService.setTitle(`${this.titleService.getTitle()} | Perfil`);

        this.isLoggedUserProfile = true;        
    }

}
