import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaQuizQuestionsComponent } from './trivia-quiz-questions.component';

describe('TriviaQuizQuestionsComponent', () => {
  let component: TriviaQuizQuestionsComponent;
  let fixture: ComponentFixture<TriviaQuizQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaQuizQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
