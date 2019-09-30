import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'app-card-dashboard', templateUrl: './card-dashboard.component.html' })
export class CardDashboardComponent implements OnInit {

    @Input() titulo: String;
    @Input() subtitulo: String;
    @Input() valor: Number;
    constructor() { }

    ngOnInit() {
    }

}
