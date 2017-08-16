import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
	selector: 'modal-content',
	template: `

	<div class="modal-header">
		<h4 class="modal-title">Hi there!</h4>
		<button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
		<span aria-hidden="true">&times;</span>
		</button>
	</div>
	  
	<div class="modal-body">
		<p> {{score}}!</p>
		<p> Click ok to play again</p>
	</div>

	<div class="modal-footer">
		<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Ok</button>
	</div>
  `,
})
export class ModalContentComponent implements OnInit {

	@Input() score: string;

	constructor(
		public activeModal: NgbActiveModal,
		private router: Router
	) { }

	ngOnInit() {
	}
}
