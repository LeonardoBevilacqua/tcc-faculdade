import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { JwtInterceptor } from './mechanism/jwt-interceptor';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { TestesService } from './services/testes.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './mechanism/auth.guard';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        TestesService, 
        ProfileService, 
        UserService, 
        AuthService, 
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AuthGuard
    ],
})
export class CoreModule { }
