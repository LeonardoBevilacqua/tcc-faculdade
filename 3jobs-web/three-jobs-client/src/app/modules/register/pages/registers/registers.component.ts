import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({ selector: 'app-registers', templateUrl: './registers.component.html', styleUrls: ['./registers.component.scss'] })
export class registersComponent implements OnInit {


    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(`${this.titleService.getTitle()} | Crie sua conta`);
    }

    register(form){
        console.log(form.value);
    }

}
