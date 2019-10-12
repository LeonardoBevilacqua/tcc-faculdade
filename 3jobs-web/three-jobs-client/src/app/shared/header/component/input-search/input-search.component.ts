import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { User } from 'src/app/shared/models/user';
import { Title } from '@angular/platform-browser';
import { JobService } from 'src/app/core/services/job.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from 'src/app/core/services/auth.service';
import { Company } from 'src/app/shared/models/company';
import { Address } from 'src/app/shared/models/address';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
    selector: 'app-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {


    jobs: Object;

    constructor(
        private titleService: Title,
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

        this.jobService.search(searchForm.value.description, 0, 20).subscribe(
            ((res: any) => {
                this.jobs = res
                this.searchService.changeJobs(this.jobs)
                this.searchService.changeSearch(searchForm.value.description)
                this.router.navigateByUrl('/search');
            }
            )
        );

    }

}
