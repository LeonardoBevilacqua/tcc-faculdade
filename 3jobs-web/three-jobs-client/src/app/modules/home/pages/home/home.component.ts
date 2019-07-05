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
        this.titleService.setTitle(`${this.titleService.getTitle()} | Home`);
        // set the active action
        this.currentSection = 'home';
        // collapse the navbar when a link is clicked
        $('.nav-link').click(() => {
            $('.navbar-collapse').collapse('hide');

            setTimeout(() => {
                navColor();
            }, 700);

        });

        $(document).scroll(function () {
            navColor();
        });

        function navColor() {

            if ($(document).scrollTop() < 80) {
                $(".navbar-bg").removeClass('nav-color-home');
                $(".navbar-bg").removeClass('nav-color-about');
                $(".navbar-bg").removeClass('nav-color-feedback');
            }
            else {
                if ($("#home").is(':visible')) {
                    $(".navbar-bg").addClass('nav-color-home');
                    $(".navbar-bg").removeClass('nav-color-about');
                    $(".navbar-bg").removeClass('nav-color-feedback');
                }
                else if ($("#about").is(':visible')) {
                    $(".navbar-bg").addClass('nav-color-about');
                    $(".navbar-bg").removeClass('nav-color-home');
                    $(".navbar-bg").removeClass('nav-color-feedback');
                }
                else if ($("#feedback").is(':visible')) {
                    $(".navbar-bg").addClass('nav-color-feedback');
                    $(".navbar-bg").removeClass('nav-color-home');
                    $(".navbar-bg").removeClass('nav-color-about');
                }
            }
        }
    }


}
