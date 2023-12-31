import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/question.model';
import { QuestionServices } from 'src/services/question.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'QuestionAndChallenger';
  questionPlaceholder: string = 'Começar game ;)';
  questions: Question[];
  history: Question[];

  currentLevel: string;

  constructor(private services: QuestionServices) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.services.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  generateRadomQuestion() {
    const random = Math.floor(Math.random() * this.questions.length);
    const question = this.questions[random];
    this.questionPlaceholder = question.description;
    this.currentLevel = question.level

    return question;
  }
}
