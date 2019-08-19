import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({ selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss'] })
export class ProfileComponent implements OnInit {

    /**
     * Flag if is the profile of the logged user.
     */
    isLoggedUserProfile: boolean;

    /**
     * The profile model.
     */
    profile: Profile;
    
    constructor(private titleService: Title, private profileService: ProfileService) { 
        this.profile = new Profile();
    }
  
    ngOnInit() {
        // set the page title
        this.titleService.setTitle(`${this.titleService.getTitle()} | Perfil`);

        this.isLoggedUserProfile = true;        

        this.profileService.read(1).subscribe(
            (profile) => {
                this.profile = profile;
            }
        );
    }

}
