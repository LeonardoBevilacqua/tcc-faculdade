import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'app-card-dashboard', templateUrl: './card-dashboard.component.html' })
export class CardDashboardComponent {

    @Input() title: string;
    @Input() subtitle: string;
    @Input() value: number;
    constructor() { }
}
