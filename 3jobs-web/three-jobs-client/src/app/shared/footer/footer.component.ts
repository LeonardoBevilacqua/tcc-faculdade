import { Component, OnInit, Input } from '@angular/core';

/**
 * Component responsible to display and handle the footer of the page.
 */
@Component({ selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.scss'] })
export class FooterComponent implements OnInit {

    /**
     * Flag if the user is logged
     */
    @Input() isLogged: boolean;
    constructor() { }

    ngOnInit() {
    }

}
