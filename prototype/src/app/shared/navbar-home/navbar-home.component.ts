import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'app-navbar-home', templateUrl: './navbar-home.component.html' })
export class NavbarHomeComponent implements OnInit {

  @Input() isLogged: boolean;
  constructor() { }

  ngOnInit() {
  }

}
