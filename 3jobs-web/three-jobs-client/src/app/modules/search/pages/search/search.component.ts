import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { JobService } from 'src/app/core/services/job.service';
import { NgForm } from '@angular/forms';

@Component({ selector: 'app-search', templateUrl: './search.component.html' })
export class SearchComponent implements OnInit {

    tagsList: string[] = [];
    filterList: Object[] = [
        {
            titleFilter: "NÍVEL",
            filters: [{
                cod: 1,
                name: "Júnior",
                qtd: 223
            },
            {
                cod: 2,
                name: "Pleno",
                qtd: 23
            },
            {
                cod: 3,
                name: "Sênior",
                qtd: 2
            }]
        },
        {
            titleFilter: "CIDADE",
            filters: [{
                cod: 4,
                name: "Campinas",
                qtd: 22
            },
            {
                cod: 5,
                name: "Hortôlandia",
                qtd: 3
            },
            {
                cod: 6,
                name: "Sumaré",
                qtd: 2
            }]
        }
    ];

    listCandidate: Object = [
        {
            name: "Marcelo Rodrigues Costa",
            title: "Desenvolvedor| JAVA| Software",
            city: "Campinas",
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            voluptates beatae
            vel quam rem quos qui! Eos officia nisi pariatur laboriosam sequi blanditiis. Modi iste culpa,
            expedita adipisci in eos!`,
            skills: ["Java", "Spring Boot", "Angular"]
        },
        {
            name: "Thiago Oliveira",
            title: "Auxiliar de Culinaria",
            city: "Campinas",
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            voluptates beatae
            vel quam rem quos qui! Eos officia nisi pariatur laboriosam sequi blanditiis. Modi iste culpa,
            expedita adipisci in eos!`,
            skills: ["C#", "ReactJS", ".NET"]
        }
    ];

    /**
     * Flag if the filter is active.
     */
    isFilterActive: boolean;

    jobList: any;
    valueSearch: string
    constructor(private searchService: SearchService,
        private jobService: JobService) { }

    ngOnInit() {
       
        this.searchService.currentJobs.subscribe(jobs => this.jobList = jobs)
        this.searchService.currentValueSearch.subscribe(valueSearch => this.valueSearch = valueSearch)
        this.isFilterActive = true;
        console.log(this.jobList.cities);
    }

    loadMore() {
        if (this.jobList.number != (this.jobList.totalPages - 1)) {
            this.jobService.search('analista', this.jobList.number + 1, 20).subscribe(
                ((res: any) => {
                    for (var i = 0; i < res.content.length; i++) {
                        this.jobList.content.push(res.content[i]);
                    }
                    this.jobList.number = res.number
                    this.jobList.totalPages = res.totalPages
                }
                )
            );
        }
    }

    onSubmit(searchForm: NgForm){
        while( this.tagsList.length) {
            this.tagsList.pop();
          } 
        //this.isFilterActive = false;
        var cidades: any;
        cidades = Object.keys(searchForm.value).filter(function(teste){return searchForm.value[teste] == true})

        this.tagsList.push(cidades)


        console.log(cidades);
        //Chamar um service passando a cidade
        this.jobService.search('analista').subscribe(
            ((res: any) => {
               
            }
            )
        );
    }

}
