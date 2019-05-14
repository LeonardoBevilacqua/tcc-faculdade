import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'app-company-card', templateUrl: './company-card.component.html' })
export class CompanyCardComponent implements OnInit {

  @Input() img: string;
  constructor() { 
  }

  ngOnInit() {
  }

}
