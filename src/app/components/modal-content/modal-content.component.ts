import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-content',
  // templateUrl: './modal-content.component.html',
  template: `
  <div class="modal-content">
      <div class="modal-header">
          <h4 class="modal-title">Hi there!</h4>
          <button type="button" class="close" aria-label="Close" (click)="gotoHomeScreen()">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
          <p> {{score}}!</p>
          <p> Click ok to play again</p>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark" (click)="playAgain()">Ok</button>
      </div>
  </div>
  `
  // styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  @Input() score: string;

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  playAgain(){
    this.activeModal.close('Close click')
    this.router.navigate(['/quiz']);
  }

  gotoHomeScreen(){
    this.activeModal.dismiss('Cross click')
    this.router.navigate(['/home']);
  }
}
