import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Address } from 'src/app/shared/models/address';
import { Company } from 'src/app/shared/models/company';

@Component({ selector: 'app-company', templateUrl: './company.component.html', styleUrls: ['./company.component.scss'] })
export class CompanyComponent extends MaintainForm<Company> implements OnInit {

    constructor(router: Router, toastr: ToastrService, private titleService: Title) {
        super(null, router, toastr);
    }

    ngOnInit() {
        this.titleService.setTitle(`3Jobs | Cadastre sua empresa`);

        this.model = new Company();
        this.model.address = new Address();
    }

}
