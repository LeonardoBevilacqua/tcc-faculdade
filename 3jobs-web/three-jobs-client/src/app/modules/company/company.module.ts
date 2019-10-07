import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './pages/company/company.component';

@NgModule({
    declarations: [CompanyComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule
    ]
})
export class CompanyModule { }
