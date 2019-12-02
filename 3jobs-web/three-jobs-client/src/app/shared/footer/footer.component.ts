import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from '../models/enums/role.enum';
import { environment } from 'src/environments/environment';

/**
 * Component responsible to display and handle the footer of the page.
 */
@Component({ selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.scss'] })
export class FooterComponent implements OnInit {

    /**
     * Flag if the user is logged
     */
    isLogged: boolean;
    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.isLogged = this.authService.getToken() !== null;
    }

    getUserRoleDescription(): string {
        switch (this.authService.getUserRole()) {
            case Role.ROLE_RECRUTER_ADMIN:
                return 'Recrutador administrativo';
            case Role.ROLE_RECRUTER:
                return 'Recrutador comum';
            case Role.ROLE_HEADHUNTER:
                return 'Headhunter';
            case Role.ROLE_CANDIDATE:
                return 'Candidato';
            default:
                return 'Indefinido';
        }
    }

    shouldDisplayRoleDescription(): boolean {
        return !environment.production && this.isLogged;
    }

}
