import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styles: [] })
export class AppComponent implements OnInit {
  title = '3Jobs';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
