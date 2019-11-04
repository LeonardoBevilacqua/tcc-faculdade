import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'app-card-candidate', templateUrl: './card-candidate.component.html' })
export class CardCandidateComponent implements OnInit {

    @Input() candidates: Object[];

    constructor() { }

    ngOnInit() {
    }

}
