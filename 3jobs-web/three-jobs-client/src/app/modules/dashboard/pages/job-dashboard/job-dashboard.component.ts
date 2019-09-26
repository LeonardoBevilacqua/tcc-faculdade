import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
    selector: 'app-job-dashboard',
    templateUrl: './job-dashboard.component.html',
    styleUrls: ['./job-dashboard.component.scss']
})
export class JobDashboardComponent implements OnInit {

    BarChartCidades: any;

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