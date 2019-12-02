import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthGuard } from './mechanism/auth.guard';
import { JwtInterceptor } from './mechanism/jwt-interceptor';
import { LoggedInGuard } from './mechanism/logged-in.guard';
import { AuthService } from './services/auth.service';
import { CompanyService } from './services/company.service';
import { JobService } from './services/job.service';
import { ProfileService } from './services/profile.service';
import { UserService } from './services/user.service';
import { QuizService } from './services/quiz.service';
import { Utils } from '../shared/utils/utils';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        ProfileService,
        UserService,
        AuthService,
        JobService,
        QuizService,
        CompanyService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AuthGuard,
        LoggedInGuard,
        Utils
    ],
})
export class CoreModule { }
