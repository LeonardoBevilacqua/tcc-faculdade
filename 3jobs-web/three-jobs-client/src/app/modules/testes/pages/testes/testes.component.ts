import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestesService } from 'src/app/core/services/testes.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Testes } from 'src/app/shared/models/testes';

@Component({ selector: 'app-testes', templateUrl: './testes.component.html', styleUrls: ['./testes.component.scss'] })
export class TestesComponent extends MaintainForm<Testes> implements OnInit {

    constructor(testesService: TestesService, router: Router, toastr: ToastrService) {
        super(testesService, router, toastr);
    }

    ngOnInit() {
        this.model = new Testes();
    }
}
