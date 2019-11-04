import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare const $: any;

@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss'] })
export class HomeComponent implements OnInit {

    /**
     * holds the current section.
     */
    currentSection: string;

    constructor(private titleService: Title) { }

    ngOnInit() {
        // set the page title
        this.titleService.setTitle(`3Jobs | Inicio`);
        // set the active action
        this.currentSection = 'home';
    }

    /**
     * Method responsible to set a new current section.
     * @param section the new section
     */
    setCurrentSection(section: string) {
        this.currentSection = section;
        // hide the navbar if opened on mobile device
        $('.navbar-collapse').collapse('hide');
    }
}
