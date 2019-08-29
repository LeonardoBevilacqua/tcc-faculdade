import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FeedbackSectionComponent } from './components/feedback-section/feedback-section.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { LoginComponent } from './components/login-modal/login-modal.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations:
  [
      HomeComponent,
      HomeSectionComponent,
      AboutSectionComponent,
      LoginComponent,
      FeedbackSectionComponent
  ],
  imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        CoreModule
  ]
})
export class HomeModule { }
