import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { ValidationMessageComponent } from './form/components/validation-message/validation-message.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [ValidationMessageComponent, HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ValidationMessageComponent,
        HeaderComponent,
        FooterComponent,
    ]
})
export class SharedModule { }
