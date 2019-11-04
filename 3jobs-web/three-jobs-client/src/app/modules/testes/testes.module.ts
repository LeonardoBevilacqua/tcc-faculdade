import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TestesComponent } from './pages/testes/testes.component';
import { TestesRoutingModule } from './testes-routing.module';

@NgModule({
  declarations: [TestesComponent],
  imports: [
    CommonModule,
    TestesRoutingModule,
    SharedModule,    
  ]
})
export class TestesModule { }
