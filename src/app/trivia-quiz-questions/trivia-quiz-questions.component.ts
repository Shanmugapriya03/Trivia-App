import { Component, OnInit } from '@angular/core';

import { GameEngineService } from '../game-engine.service';

@Component({
  selector: 'app-trivia-quiz-questions',
  templateUrl: './trivia-quiz-questions.component.html',
  styleUrls: ['./trivia-quiz-questions.component.css']
})
export class TriviaQuizQuestionsComponent implements OnInit {

  constructor(private service : GameEngineService) { }

  quizSet = [];
  ngOnInit() {
    this.service.getQuestions()
        .subscribe(
          response => {
            this.quizSet = JSON.parse(JSON.stringify(response['results']));
            // console.log(this.quizSet);
            this.parseContent(this.quizSet);
            this.shuffleQuizOptions(this.quizSet);
          }
        )
  }

  // Decode logic for Decoding the Html Conent
  decodeHtml(html : any){
    const text = document.createElement('textarea');
    text.innerHTML = html;
    return text.value;
  }

  // Decoding the question, correct and incorrect answer
  parseContent(quizArr : any){
    for(let i=0; i<quizArr.length; i++){
      quizArr[i].question = this.decodeHtml(quizArr[i].question);
      quizArr[i].correct_answer = this.decodeHtml(quizArr[i].correct_answer);

      for(let j=0; j<quizArr[i].incorrect_answers.length; j++){
        quizArr[i].incorrect_answers[j] = this.decodeHtml(quizArr[i].incorrect_answers[j]);
      }
    }
  }

  //  Shuffle logic 
  shuffle(arr : any){
    let m = arr.length,t,i;
    while(m){
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  }

  // Shuffling correct and incorrect options
  shuffleQuizOptions(quizArr : any){
    const tempQuizArr =JSON.parse(JSON.stringify(quizArr));
    const clubbedArr = [];
    for(let i=0;i<tempQuizArr.length;i++){
      clubbedArr[i] = tempQuizArr[i].incorrect_answers;
      clubbedArr[i].push(tempQuizArr[i].correct_answer);
    }
    for(let j=0;j<clubbedArr.length;j++){
      this.quizSet[j].choices = this.shuffle(clubbedArr[j]);

    }
  }

}
