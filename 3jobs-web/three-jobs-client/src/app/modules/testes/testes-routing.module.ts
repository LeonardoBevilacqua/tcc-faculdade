import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestesComponent } from './pages/testes/testes.component';

const routes: Routes = [
  {
    path: '',
    component: TestesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestesRoutingModule { }
