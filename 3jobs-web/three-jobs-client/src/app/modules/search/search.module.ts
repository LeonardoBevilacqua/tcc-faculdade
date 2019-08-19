import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardJobComponent } from './components/card-job/card-job.component';
import { CardCandidateComponent } from './components/card-candidate/card-candidate.component';
@NgModule({
  declarations: [SearchComponent, CardJobComponent, CardCandidateComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
