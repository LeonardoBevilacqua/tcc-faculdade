import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { JobService } from 'src/app/core/services/job.service';
import { NgForm } from '@angular/forms';
import { DirectAccessUrlService } from 'src/app/core/services/direct-access-url.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({ selector: 'app-search', templateUrl: './search.component.html' })
export class SearchComponent implements OnInit {

    tagsList: string[] = [];
    isFilterActive: boolean;
    jobList: any;
    cities: any;
    jobRoles: any;
    valueSearch: string;
    filterForm: NgForm
    city: string;
    jobRole: string;

    constructor(private jobService: JobService,
        private toast: ToastrService,
        private searchService: SearchService,
        private spinnerService: Ng4LoadingSpinnerService,
    ) { }

    ngOnInit() {
        this.searchService.currentJobs.subscribe(jobs => {
            this.jobList = jobs.jobs;
            this.cities = this.transform(jobs.cities)
            this.jobRoles = this.transform(jobs.jobRoles);
            this.isFilterActive = true;
            while (this.tagsList.length) {
                this.tagsList.pop();
            }
        })
        this.searchService.currentValueSearch.subscribe(valueSearch => this.valueSearch = valueSearch)
    }

    loadMore() {
        if (this.jobList.number != (this.jobList.totalPages - 1)) {
            this.jobService.search(this.valueSearch, this.jobList.number + 1, 20, this.city, this.jobRole).subscribe(
                ((res: any) => {
                    for (var i = 0; i < res.jobs.content.length; i++) {
                        this.jobList.content.push(res.jobs.content[i]);
                    }
                    this.jobList.number = res.jobs.number
                    this.jobList.totalPages = res.jobs.totalPages
                }
                )
            );
        }
    }

    transform(value: { [x: string]: any; }): any {
        let keys = [];
        for (let key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    }

    onSubmit(searchForm: NgForm, event: Event) {
        event.preventDefault();

        this.city = searchForm.value.filterCities;
        this.jobRole = searchForm.value.filterJobRoles;

        this.isFilterActive = true;
        while (this.tagsList.length) {
            this.tagsList.pop();
        }
        if (searchForm.value.filterCities != '' && searchForm.value.filterCities != null) {
            this.tagsList.push(searchForm.value.filterCities)

        } else { this.city = ''; }
        if (searchForm.value.filterJobRoles != '' && searchForm.value.filterJobRoles != null) {
            this.tagsList.push(searchForm.value.filterJobRoles)

        } else { this.jobRole = ''; }
        this.spinnerService.show();
        this.jobService.search(this.valueSearch, 0, 20, this.city, this.jobRole).subscribe(
            (res: any) => {
                this.jobList = res.jobs;
                this.spinnerService.show();
                this.spinnerService.hide();
            }, (error: HttpErrorResponse) => {
                this.toast.error('Ocorreu um erro inesperado, por favor aguarde!');
                this.spinnerService.hide();
            }
        );
        searchForm.reset();
    }
    cleanFilter(searchForm: NgForm) {
        this.isFilterActive = true;
        searchForm.reset();
        while (this.tagsList.length) {
            this.tagsList.pop();
        }
        this.spinnerService.show();
        this.jobService.search(this.valueSearch, 0, 20).subscribe(
            (res: any) => {
                this.jobList = res.jobs;
                this.cities = this.transform(res.cities)
                this.jobRoles = this.transform(res.jobRoles);
                this.spinnerService.hide();
            }, (error: HttpErrorResponse) => {
                this.toast.error('Ocorreu um erro inesperado, por favor aguarde!');
                this.spinnerService.hide();
            }
        );
    }
}