import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { ValidationMessageComponent } from './form/components/validation-message/validation-message.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [ValidationMessageComponent, HeaderComponent],
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ValidationMessageComponent,
        HeaderComponent,
    ]
})
export class SharedModule { }
