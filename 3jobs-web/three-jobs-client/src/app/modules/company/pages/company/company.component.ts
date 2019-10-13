import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { CompanyService } from 'src/app/core/services/company.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Address } from 'src/app/shared/models/address';
import { Company } from 'src/app/shared/models/company';
import { RoleValuePipe } from 'src/app/shared/pipes/role-value.pipe';

@Component({ selector: 'app-company', templateUrl: './company.component.html', styleUrls: ['./company.component.scss'] })
export class CompanyComponent extends MaintainForm<Company> implements OnInit {

    constructor(
        companyService: CompanyService,
        router: Router,
        toastr: ToastrService,
        private titleService: Title,
        private authService: AuthService,
        private roleValue: RoleValuePipe) {
        super(companyService, router, toastr);

        // try to get the current path id if exists
        this.getCurrentId();

        // initialize the model
        this.model = new Company();
        this.model.address = new Address();
        this.model.admin = this.authService.getUser();
        this.model.admin.roles = this.roleValue.transform(this.model.admin.roles[0]);
    }

    ngOnInit() {
        if (!isNaN(this.currentId)) {
            this.loadModelFromCurrentId();
        }

        this.titleService.setTitle(`3Jobs | ${this.isEdition ? 'Edite' : 'Cadastre'} sua empresa`);
    }
}
