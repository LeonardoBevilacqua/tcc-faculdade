import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss'] })
export class HomeComponent implements OnInit {

	/** 
	 * holds the current section.
	 */
	currentSection: string;

	constructor(private titleService: Title) { }

	ngOnInit() {
		this.titleService.setTitle(`${this.titleService.getTitle()} | Home`);
		this.currentSection = 'home';
	}

}
