import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './pages/company/company.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleValuePipe } from 'src/app/shared/pipes/role-value.pipe';

@NgModule({
    declarations: [CompanyComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        SharedModule,
    ],
    providers: [RoleValuePipe]
})
export class CompanyModule { }
