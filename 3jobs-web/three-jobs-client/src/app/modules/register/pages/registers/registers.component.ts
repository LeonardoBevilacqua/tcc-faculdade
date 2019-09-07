import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { User } from 'src/app/shared/models/user';
import { Profile } from 'src/app/shared/models/profile';
import { ValidationMessageComponent } from 'src/app/shared/form/components/validation-message/validation-message.component';



@Component({ selector: 'app-registers', templateUrl: './registers.component.html', styleUrls: ['./registers.component.scss'] })
export class registersComponent extends MaintainForm<User> implements OnInit {

    formulario: FormGroup;
    
    constructor(private formBuilder: FormBuilder, private titleService: Title, private userService: UserService, router: Router, spinnerService: Ng4LoadingSpinnerService, toastr: ToastrService) {
        super(null, router, toastr, spinnerService);
    }

    ngOnInit() {
        this.titleService.setTitle(`${this.titleService.getTitle()} | Crie sua conta`);

        this.model = new User();
        this.model.profile = new Profile();
        this.model.roles = [];

        this.formulario = this.formBuilder.group({
            name: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            email2: [null],
            password: [null, [Validators.required, Validators.minLength(8)]],
            password2: [null],
            cpf: this.formBuilder.control({ value: null, disabled: false }, ValidationMessageComponent.isValidCpf()),
            lastName: [null, Validators.required],
            roles: [null, Validators.required]
        }, {
                validator: [ValidationMessageComponent.mustMatch('password', 'password2'), ValidationMessageComponent.mustMatch('email', 'email2')]
            })
    }

    onSubmit() {
        this.model.name = this.formulario.get('name').value;
        this.model.profile.name = this.formulario.get('name').value;
        this.model.profile.lastName = this.formulario.get('lastName').value;
        this.model.email = this.formulario.get('email').value;
        this.model.password = this.formulario.get('password').value;
        this.model.cpf = this.formulario.get('cpf').value;
        this.model.roles.push(this.formulario.get('roles').value);

        this.spinnerService.show();
        
        this.userService.create(this.model).subscribe((res) => {
            this.spinnerService.hide();
            this.router.navigateByUrl('/');
        },
            (error) => {
                this.model.roles.pop();
                this.toastr.error(error.statusText);
                this.spinnerService.hide();
            });
    }
}
