import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Component({ selector: 'app-navbar-home', templateUrl: './navbar-home.component.html' })
export class NavbarHomeComponent implements OnInit {
  
  user: Usuario;
  @Input() isLogged: boolean;

  constructor() { }

  ngOnInit() {
    this.user = new Usuario();
    this.user.email = 'w';
  }

  login() {
    console.log(this.user.email);
  }

}
