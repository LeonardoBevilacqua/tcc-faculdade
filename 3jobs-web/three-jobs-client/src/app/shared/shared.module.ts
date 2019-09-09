import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { FooterComponent } from './footer/footer.component';
import { ValidationMessageComponent } from './form/components/validation-message/validation-message.component';
import { CpfValidationDirective } from './form/directive/cpf-validation.directive';
import { MustMatchDirective } from './form/directive/must-match.directive';
import { HeaderComponent } from './header/header.component';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
    declarations: [ValidationMessageComponent, HeaderComponent, FooterComponent, AgePipe, MustMatchDirective, CpfValidationDirective],
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
        MustMatchDirective,
        CpfValidationDirective,
    ],
})
export class SharedModule { }
