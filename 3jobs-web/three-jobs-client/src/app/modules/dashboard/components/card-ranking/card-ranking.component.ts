import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-ranking',
    templateUrl: './card-ranking.component.html',
    styleUrls: ['./card-ranking.component.scss']
})
export class CardRankingComponent implements OnInit {

    @Input() ranking: Array<Object>;
    constructor() { }

    ngOnInit() {
    }

}
