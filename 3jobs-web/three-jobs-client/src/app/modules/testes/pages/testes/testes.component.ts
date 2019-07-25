import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Testes } from 'src/app/shared/models/testes';
import { TestesService } from 'src/app/core/services/testes.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-testes', templateUrl: './testes.component.html', styleUrls: ['./testes.component.scss'] })
export class TestesComponent extends MaintainForm<Testes> implements OnInit {

  constructor(testesService: TestesService, router: Router, toastr: ToastrService) { 
      super(testesService, router, toastr);
  }

  ngOnInit() {
      super.ngOnInit();

      this.model = new Testes();
  }
}
