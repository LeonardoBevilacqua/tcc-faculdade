import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/core/services/company.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Address } from 'src/app/shared/models/address';
import { Company } from 'src/app/shared/models/company';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';
import { RoleValuePipe } from 'src/app/shared/pipes/role-value.pipe';

@Component({ selector: 'app-company', templateUrl: './company.component.html', styleUrls: ['./company.component.scss'] })
export class CompanyComponent extends MaintainForm<Company> implements OnInit {

    constructor(
        private companyService: CompanyService,
        router: Router,
        toastr: ToastrService,
        private titleService: Title,
        private authService: AuthService,
        private userService: UserService,
        private roleValue: RoleValuePipe) {
        super(companyService, router, toastr);

        // try to get the current path id if exists
        this.getCurrentId();

        // initialize the model
        this.model = new Company();
        this.model.address = new Address();
    }

    ngOnInit() {
        if (!isNaN(this.currentId)) {
            this.loadModelFromCurrentId();
        }

        this.titleService.setTitle(`3Jobs | ${this.isEdition ? 'Edite' : 'Cadastre'} sua empresa`);
    }

    /**
     * Method responsible to submit the form.
     */
    onSubmit(redirectPath: string = null) {
        this.isSubmitted = false;


        // If current id was set, then make a PUT request
        if (this.isEdition) {
            // If current id matches the model id
            if (this.currentId === this.model.id) {
                this.companyService.update(this.model).subscribe(
                    (response: any) => {
                        this.toastr.success(response.message ? response.message : 'Informações atualizadas com sucesso!');

                        this.isSubmitted = true;

                        if (redirectPath) {
                            this.router.navigateByUrl(redirectPath);
                        }
                    },
                    (error: HttpErrorResponse) => this.errorHandler(error)
                );
            }
        }
        // Otherwise, make a POST request
        else {
            this.companyService.create(this.model).subscribe(
                (response: Company) => {
                    this.updateUser(response, redirectPath);
                },
                (error: HttpErrorResponse) => this.errorHandler(error)
            );
        }
    }

    private updateUser(company: Company, redirectPath: string = null) {
        const user: User = this.authService.getUser();
        user.roles = this.roleValue.transform(user.roles[0]);
        user.companyId = company.id;

        this.userService.update(user).subscribe(
            () => {
                this.toastr.success('Informações salvas com sucesso!');

                this.isSubmitted = true;

                this.authService.setUser(user);

                if (redirectPath) {
                    this.router.navigateByUrl(redirectPath);
                }
            },
            (error: HttpErrorResponse) => this.errorHandler(error)
        );
    }
}
