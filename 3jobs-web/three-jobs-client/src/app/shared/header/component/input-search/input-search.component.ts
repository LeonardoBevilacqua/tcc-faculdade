import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({ selector: 'app-input-search', templateUrl: './input-search.component.html', })
export class InputSearchComponent implements OnInit {


    jobs: Object;

    constructor(

        private jobService: JobService,
        private router: Router,
        private toast: ToastrService,
        private spinnerService: Ng4LoadingSpinnerService,
        private searchService: SearchService) {
        this.jobs = [];
    }

    ngOnInit() {
    }

    onSubmit(searchForm: NgForm) {
        this.spinnerService.show();

        this.jobService.search(searchForm.value.description, 0, 20).subscribe(
            (res: any) => {
                this.jobs = res;
                this.searchService.changeJobs(this.jobs);
                this.searchService.changeSearch(searchForm.value.description);
                this.router.navigateByUrl('/search');
                this.spinnerService.hide();
            }, (error: HttpErrorResponse) => {
                this.spinnerService.hide();
                this.toast.error('Ocorreu um erro inesperado, por favor aguarde!');
            }
        );
    }
}

