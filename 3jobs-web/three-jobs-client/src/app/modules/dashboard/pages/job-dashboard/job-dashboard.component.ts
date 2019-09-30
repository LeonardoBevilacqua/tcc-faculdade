import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({ selector: 'app-job-dashboard', templateUrl: './job-dashboard.component.html' })
export class JobDashboardComponent implements OnInit {

    BarChartCidades: any;
    ranking: Array<Object> = [
        {
            rank: 1,
            nome: "marcelo",
            perfil: "caminhodoperfil"
        },
        {
            rank: 2,
            nome: "Leonardo",
            perfil: "caminhodoperfil"
        },
        {
            rank: 3,
            nome: "Marcio",
            perfil: "caminhodoperfil"
        },
        {
            rank: 4,
            nome: "Thiago",
            perfil: "caminhodoperfil"
        },
        {
            rank: 5,
            nome: "Ronaldo",
            perfil: "caminhodoperfil"
        },
    ];

    constructor() { }

    ngOnInit() {
        this.BarChartCidades = new Chart('barChartCidades', {
            type: 'bar',
            data: {
                labels: ["Campinas", "Hotolândia", "Sumaré"],
                datasets: [{
                    data: [9, 7, 2],
                    borderWidth: 1
                }]

            },
            options: {
                legend: {
                    display: false,
                },
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    text: "Cidade dos Candidatos",
                    display: true
                }
            }
        });
    }
}
