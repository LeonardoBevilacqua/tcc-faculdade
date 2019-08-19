import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    tagsList: String[] = ["angular", "java", "backend"];
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

    jobList: Object = [
        {
            title: "Java",
            company: "Eldorado",
            nivel: "Júnior",
            city: "Campinas",
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            voluptates beatae
            vel quam rem quos qui! Eos officia nisi pariatur laboriosam sequi blanditiis. Modi iste culpa,
            expedita adipisci in eos!`,
            publicated: "4 Dias"
        },
        {
            title: "Java",
            company: "Daitan",
            nivel: "Pleno",
            city: "Campinas",
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            voluptates beatae
            vel quam rem quos qui! Eos officia nisi pariatur laboriosam sequi blanditiis. Modi iste culpa,
            expedita adipisci in eos!`,
            publicated: "02/02/2019"
        }
    ];

    listCandidate: Object = [
        {
            name: "Marcelo Rodrigues Costa",
            title:"Desenvolvedor| JAVA| Software",
            city: "Campinas",
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            voluptates beatae
            vel quam rem quos qui! Eos officia nisi pariatur laboriosam sequi blanditiis. Modi iste culpa,
            expedita adipisci in eos!`,
            skills:["Java", "Spring Boot", "Angular"]
        },
        {
            name: "Thiago Oliveira",
            title:"Auxiliar de Culinaria",
            city: "Campinas",
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            voluptates beatae
            vel quam rem quos qui! Eos officia nisi pariatur laboriosam sequi blanditiis. Modi iste culpa,
            expedita adipisci in eos!`,
            skills:["C#", "ReactJS", ".NET"]
        }
    ];

    constructor() { }

    ngOnInit() {
        $(document).ready(function(){
            $('#btn-filter-filter').click(() =>{
                $( "#container-filters" ).removeClass('d-none');
                $('#btn-filter-filter').addClass('d-none');
                $('#btn-filter-cancel').removeClass('d-none');
                $('#btn-filter-apply').removeClass('d-none');
            });
            $('#btn-filter-cancel').click(() =>{
                $( "#container-filters" ).addClass('d-none');
                $('#btn-filter-filter').removeClass('d-none');
                $('#btn-filter-cancel').addClass('d-none');
                $('#btn-filter-apply').addClass('d-none');
            });
        });
        
    }

    

}
