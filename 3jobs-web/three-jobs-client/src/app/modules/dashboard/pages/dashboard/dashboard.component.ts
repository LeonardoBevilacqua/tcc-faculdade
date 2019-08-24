import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    PieChart: any;
    Doughnut: any;
    constructor() { }

    ngOnInit() {
        this.PieChart = new Chart('pieChart', {
            type: 'pie',
            data: {
                labels: ["Campinas","Hotolândia", "Sumaré"],
                datasets: [{
                    data: [9, 7, 2],
                    borderWidth:1
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

        this.Doughnut = new Chart('doughnutChart', {
            type: 'doughnut',
            data: {
                labels: ["pendentes","Avaliados"],
                datasets: [{
                    data: [9, 7],
                    borderWidth:1,
                    backgroundColor:["#b0b2b5", "#21cae5"]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    text: "Candidatos Avaliados",
                    display: true
                }
            }
        });
    }

}
