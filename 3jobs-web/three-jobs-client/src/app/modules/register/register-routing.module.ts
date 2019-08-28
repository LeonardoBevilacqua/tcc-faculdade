import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { registersComponent } from './pages/registers/registers.component';

const routes: Routes = [
    {
        path: '',
        component: registersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
