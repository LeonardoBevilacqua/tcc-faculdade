import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({ selector: 'app-root', template: `<router-outlet></router-outlet>`, styles: [] })
export class AppComponent implements OnInit {
  title = '3Jobs';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
