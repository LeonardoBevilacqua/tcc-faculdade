import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
    ]
})
export class AuthModule { }
