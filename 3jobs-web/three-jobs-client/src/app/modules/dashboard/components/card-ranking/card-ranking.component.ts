import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from 'src/app/shared/models/enums/role.enum';
import { Profile } from './../../../../shared/models/profile';
import { Score } from './../../../../shared/models/score';

@Component({ selector: 'app-card-ranking', templateUrl: './card-ranking.component.html' })
export class CardRankingComponent implements OnInit {

    @Input() ranking: Array<Score>;
    @Input() headhunter: Profile;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.headhunter = new Profile();
    }

    shouldDisplayHeadhunter() {
        return this.authService.getUserRole() === Role.ROLE_HEADHUNTER;
    }
}
