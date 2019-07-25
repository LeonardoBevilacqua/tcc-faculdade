import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { ValidationMessageComponent } from './form/components/validation-message/validation-message.component';


@NgModule({
    declarations: [ValidationMessageComponent],
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ValidationMessageComponent
    ]
})
export class SharedModule { }
