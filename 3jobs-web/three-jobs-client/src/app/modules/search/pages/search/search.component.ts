import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { JobService } from 'src/app/core/services/job.service';
import { NgForm } from '@angular/forms';

@Component({ selector: 'app-search', templateUrl: './search.component.html' })
export class SearchComponent implements OnInit {

    tagsList: string[] = [];
    isFilterActive: boolean;
    jobList: any;
    cities: any;
    jobRoles: any;
    valueSearch: string;
    filterForm: NgForm

    constructor(private searchService: SearchService,
        private jobService: JobService) { }

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

        console.log(this.cities);
        console.log(this.jobRoles);
    }

    loadMore() {
        if (this.jobList.number != (this.jobList.totalPages - 1)) {
            this.jobService.search(this.valueSearch, this.jobList.number + 1, 20).subscribe(
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

    onSubmit(searchForm: NgForm) {

        console.log(searchForm.value.filterCities);
        console.log(searchForm.value.filterJobRoles);
        this.isFilterActive = true;
        while (this.tagsList.length) {
            this.tagsList.pop();
        }
        //this.isFilterActive = false;
        // var cidades: any;
        // cidades = Object.keys(searchForm.value).filter(function (teste) { return searchForm.value[teste] == true })
        if (searchForm.value.filterCities != '' && searchForm.value.filterCities != null) {
            this.tagsList.push(searchForm.value.filterCities)
        }

        if (searchForm.value.filterJobRoles != '' && searchForm.value.filterJobRoles != null) {
            this.tagsList.push(searchForm.value.filterJobRoles)
        }
        // console.log(cidades);
        //Chamar um service passando a cidade
        // this.jobService.search('analista').subscribe(
        //     ((res: any) => {

        //     }
        //     )
        // );
        searchForm.reset();
    }


    cleanFilter(searchForm: NgForm) {
        this.isFilterActive = true;
        searchForm.reset();
        while (this.tagsList.length) {
            this.tagsList.pop();
        }
    }

}