import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({ selector: 'app-root', template: `<router-outlet></router-outlet><ng4-loading-spinner [timeout]="30000" [threshold]="0"></ng4-loading-spinner>`, styles: [] })
export class AppComponent implements OnInit {
  title = '3Jobs';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
