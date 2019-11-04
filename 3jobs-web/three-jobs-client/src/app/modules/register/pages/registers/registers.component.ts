import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Profile } from 'src/app/shared/models/profile';
import { User } from 'src/app/shared/models/user';

@Component({ selector: 'app-registers', templateUrl: './registers.component.html', styleUrls: ['./registers.component.scss'] })
export class RegistersComponent extends MaintainForm<User> implements OnInit {

    /**
     * variable responsible to verify the password
     */
    passwordField: string;

    /**
     * variable responsible to verify the email
     */
    emailField: string;

    constructor(private titleService: Title,
                userService: UserService,
                router: Router,
                toastr: ToastrService) {
        super(userService, router, toastr);
    }

    ngOnInit() {
        this.titleService.setTitle(`3Jobs | Crie sua conta`);

        this.model = new User();
        this.model.profile = new Profile();
        this.model.roles = [];
    }
}
