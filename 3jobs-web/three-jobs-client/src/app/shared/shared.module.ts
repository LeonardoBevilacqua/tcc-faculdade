import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { ValidationMessageComponent } from './form/components/validation-message/validation-message.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
    declarations: [ValidationMessageComponent, HeaderComponent, FooterComponent, AgePipe],
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
        AgePipe,
    ]
})
export class SharedModule { }
