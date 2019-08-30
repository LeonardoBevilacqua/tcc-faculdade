import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TestesService } from './services/testes.service';
import { ProfileService } from './services/profile.service';
import { RegisterService } from './services/register.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [TestesService, ProfileService, RegisterService],
})
export class CoreModule { }
