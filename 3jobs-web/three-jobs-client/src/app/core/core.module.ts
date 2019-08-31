import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ProfileService } from './services/profile.service';
<<<<<<< HEAD
import { RegisterService } from './services/register.service';
=======
import { TestesService } from './services/testes.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
>>>>>>> dev


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
<<<<<<< HEAD
    providers: [TestesService, ProfileService, RegisterService],
=======
    providers: [TestesService, ProfileService, UserService, AuthService],
>>>>>>> dev
})
export class CoreModule { }
