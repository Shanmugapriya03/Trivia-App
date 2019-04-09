import { Component } from '@angular/core';

import { GameEngineService } from './game-engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Trivia';
  objectKeys = Object.keys;
  constructor(private service : GameEngineService){}

  quizSet = [];

  ngOnInit(){
    this.service.getQuestions()
        .subscribe(
          response => {
            this.quizSet = JSON.parse(JSON.stringify(response['results']));
            console.log(this.quizSet);
          }
        );
  }
}
