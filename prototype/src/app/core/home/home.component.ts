import { Component, OnInit } from '@angular/core';

@Component({ selector: 'app-home', templateUrl: './home.component.html' })
export class HomeComponent implements OnInit {

  imgs = [
    "http://lorempixel.com/400/200/business", 
    "http://lorempixel.com/400/200/business", 
    "http://lorempixel.com/400/200/business", 
    "http://lorempixel.com/400/200/business",
    "http://lorempixel.com/400/200/business", 
    "http://lorempixel.com/400/200/business",
    "http://lorempixel.com/400/200/business",
    "http://lorempixel.com/400/200/business",
    "http://lorempixel.com/400/200/business", 
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
