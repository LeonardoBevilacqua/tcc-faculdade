import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';

@NgModule({
    declarations: [CadastrosComponent],
    imports: [
        CommonModule,
        CadastroRoutingModule,
        SharedModule,
        CoreModule
    ]

})
export class CadastroModule { 
    
}
