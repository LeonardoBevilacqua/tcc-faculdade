import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'app-card-job', templateUrl: './card-job.component.html' })
export class CardJobComponent implements OnInit {

    @Input() jobs: Object[];

    constructor() { }

    ngOnInit() {
    }

}
