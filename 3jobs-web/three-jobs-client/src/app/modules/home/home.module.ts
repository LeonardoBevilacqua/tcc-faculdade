import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AccountModalComponent } from './components/account-modal/account-modal.component';
import { TesteComponent } from './pages/teste/teste.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HomeSectionComponent, AboutSectionComponent, AccountModalComponent, TesteComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
