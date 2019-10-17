import { Score } from './../../../../shared/models/score';
import { Profile } from './../../../../shared/models/profile';
import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'app-card-ranking', templateUrl: './card-ranking.component.html' })
export class CardRankingComponent implements OnInit {

    @Input() ranking: Array<Score>;
    @Input() headhunter: Profile;
    
    constructor() { }

    ngOnInit() {
        this.headhunter = new Profile();
    }

}
