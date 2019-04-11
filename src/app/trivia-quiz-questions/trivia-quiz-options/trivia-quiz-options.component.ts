import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trivia-quiz-options',
  templateUrl: './trivia-quiz-options.component.html',
  styleUrls: ['./trivia-quiz-options.component.css']
})
export class TriviaQuizOptionsComponent implements OnInit {

  @Input() quizChoices : any;
  @Input() i : any;

  constructor() { }

  ngOnInit() {}

  handleClick($event,correctAnswer,i) {
    const choosedAnswer = $event.target.innerText;
    const targetButtonGroup = document.getElementsByClassName(i);
    const clickedButton = document.getElementById($event.target.id);
    if(choosedAnswer === correctAnswer){
      clickedButton.classList.remove('btn-outline-secondary');
      clickedButton.classList.add('btn-success');
    }else{
      clickedButton.classList.remove('btn-outline-secondary');
      clickedButton.classList.add('btn-danger');
    }
    for(let j=0;j<targetButtonGroup.length;j++){
      targetButtonGroup[j]['disabled']=true;
    } 
  }
}
