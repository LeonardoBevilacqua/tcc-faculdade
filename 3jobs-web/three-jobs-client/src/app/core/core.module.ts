import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ProfileService } from './services/profile.service';
import { TestesService } from './services/testes.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [TestesService, ProfileService, UserService, AuthService],
})
export class CoreModule { }
