import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [{
    path: '',
    component: QuizComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizRoutingModule { }