import { Component, OnInit } from '@angular/core';

@Component({ selector: 'app-home', templateUrl: './home.component.html' })
export class HomeComponent implements OnInit {

  imgs = [
    "http://lorempixel.com/400/200/city", 
    "http://lorempixel.com/400/200/people", 
    "http://lorempixel.com/400/200/transport", 
    "http://lorempixel.com/400/200/animals",
    "http://lorempixel.com/400/200/food", 
    "http://lorempixel.com/400/200/nature",
    "http://lorempixel.com/400/200/business",
    "http://lorempixel.com/400/200/cats",
    "http://lorempixel.com/400/200/technics", 
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
