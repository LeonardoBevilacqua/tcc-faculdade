import { Component, OnInit, Input } from '@angular/core';

/**
 * Component responsible to display and handle the header of the page.
 */
@Component({ selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.scss'] })
export class HeaderComponent implements OnInit {

    /**
     * Flag if the user is logged
     */
    @Input() isLogged: boolean;

    constructor() { }

    ngOnInit() {
    }

}
