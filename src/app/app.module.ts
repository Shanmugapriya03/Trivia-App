import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameEngineService } from './game-engine.service';
import { TriviaQuizQuestionsComponent } from './trivia-quiz-questions/trivia-quiz-questions.component';
import { TriviaQuizOptionsComponent } from './trivia-quiz-questions/trivia-quiz-options/trivia-quiz-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaQuizQuestionsComponent,
    TriviaQuizOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
