import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

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

}
