import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobDashboardComponent } from './pages/job-dashboard/job-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
<<<<<<< HEAD
        path: 'job-dashboard/:id',
=======
        path: 'job',
>>>>>>> dev
        component: JobDashboardComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
