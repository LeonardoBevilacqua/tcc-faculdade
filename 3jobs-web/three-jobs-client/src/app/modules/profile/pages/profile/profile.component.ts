import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { Profile as Profile } from 'src/app/shared/models/profile';

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
    
    constructor(private titleService: Title, private userService: UserService, private router: Router, private toast: ToastrService, private spinnerService: Ng4LoadingSpinnerService) { 
        this.profile = new Profile();
    }
  
    ngOnInit() {
        // set the page title
        this.titleService.setTitle(`${this.titleService.getTitle()} | Perfil`);

        this.spinnerService.show();

        this.isLoggedUserProfile = true;      
        
        // get the current path id if exists
        let currentId = +this.router.url.split('/')[2];

        this.userService.read(currentId).subscribe(
            (response: any) => {
                this.profile = response.profile;
                this.profile.user = response;
                console.log(this.profile);
                this.spinnerService.hide();
            },
            (error) => {
                //this.router.navigate(['/']);
                this.toast.error(error.statusText);
                this.spinnerService.hide();
            }
        );
    }

}
