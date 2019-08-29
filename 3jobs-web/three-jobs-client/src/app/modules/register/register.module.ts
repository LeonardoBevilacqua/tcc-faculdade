import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { registersComponent } from './pages/registers/registers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [registersComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        SharedModule,
        CoreModule,
        HttpClientModule
    ]

})
export class RegisterModule { 
    
}
