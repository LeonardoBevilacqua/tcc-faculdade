import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutComponent } from './components/about/about.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@NgModule({
  declarations: [HomeComponent, HomeSectionComponent, AboutComponent, AboutSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
