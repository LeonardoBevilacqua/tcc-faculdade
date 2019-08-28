import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-cadastros',
    templateUrl: './cadastros.component.html',
    styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {


    constructor(private titleService: Title) { }

    ngOnInit() {

    }

    register(form){
        console.log(form.value);
    }

}
