import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './pages/company/company.component';

@NgModule({
    declarations: [CompanyComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        SharedModule,
    ],
    providers: []
})
export class CompanyModule { }
