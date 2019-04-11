import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaQuizOptionsComponent } from './trivia-quiz-options.component';

describe('TriviaQuizOptionsComponent', () => {
  let component: TriviaQuizOptionsComponent;
  let fixture: ComponentFixture<TriviaQuizOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaQuizOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaQuizOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
