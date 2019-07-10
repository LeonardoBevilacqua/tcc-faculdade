import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AccountModalComponent } from './components/account-modal/account-modal.component';
import { FeedbackSectionComponent } from './components/feedback-section/feedback-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations:
  [
      HomeComponent,
      HomeSectionComponent,
      AboutSectionComponent,
      AccountModalComponent,
      FooterComponent,
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
