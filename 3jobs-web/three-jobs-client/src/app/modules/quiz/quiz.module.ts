import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './pages/quiz/quiz.component';

@NgModule({
    declarations: [QuizComponent],
    imports: [
        CommonModule,
        QuizRoutingModule,
        FormsModule
    ]
})
export class QuizModule { }
