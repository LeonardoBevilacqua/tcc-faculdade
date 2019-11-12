import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './pages/config/config.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [ConfigComponent],
    imports: [
        CommonModule,
        ConfigRoutingModule,
        SharedModule,
        CoreModule,
    ]
})
export class ConfigModule { }
