import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegistersComponent } from './pages/registers/registers.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
    declarations: [RegistersComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        SharedModule,
        CoreModule,
        HttpClientModule,
        ReactiveFormsModule
    ]

})
export class RegisterModule {}
