
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

//Router
import { Router } from '@angular/router';

// Services
import { DataService } from '../../services/DataService/data.service';
import { ModalService } from '../../services/ModalService/modal.service';

@Component({
	selector: 'quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
	
	quizData;

	constructor (
		private dataService: DataService,
		private router: Router,
		private modalService: ModalService
	) { }

	ngOnInit() {
		this.dataService.getQuizData().subscribe(data => {
			this.quizData = data;
		});
	}

	/**
	 * getScore() method:
	 * 
	 * 1. popup a modal with the result of the quiz
	 * 2. navigate the user back to "Home" screen
	 */
	getScore() {
		let totalCorrect = this.quizData.questions
			.reduce((sum, { selected, correct }) => {
				if (selected == correct) {
					return sum + 1;
				}
				return sum;
			}, 0);

		let quizFinalMessage = `You succeeded with ${totalCorrect} out of ${this.quizData.questions.length},
		Your score is ${totalCorrect / this.quizData.questions.length * 100}`;

		this.resetCurrentQuestion();
		this.resetSelectedAnswers();

		let subject = new Subject();
		this.modalService.alert(subject, quizFinalMessage);
		
		subject.subscribe(
			(val) => {
				this.router.navigate(['/quiz']);
			},
			(err) => {
				this.router.navigate(['/home']);
			},
			() => console.log('success')
		);
	}

	/**
	 * resetCurrentQuestion() method:
	 * 
	 * resets the currenQuestion data
	 */
	resetCurrentQuestion() {
		this.quizData.currentQuestion = 0;
	}

	/**
	 * resetSelecetedAnswers()
	 * 
	 * resets the selected answers in the quizData
	 */
	resetSelectedAnswers() {
		this.quizData.questions.forEach(question => {
			question.selected = null;
		});
	}
}
