import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable } from 'rxjs';

// Services
import { EventService } from '../EventService/event.service';

// ModalComponent
import { ModalContentComponent } from '../../components/modal-content/modal-content.component';

@Injectable()
export class ModalService{
    
    constructor(
        private ngbModal: NgbModal,
        private eventService: EventService
    ) { }
   
    /**
     * alert() method:
     * 
     * this triggers a modal at the end of the game
     * @param {String} content 
     * @return {Promise}?
     */
    alert(content) { 
        console.log('inside modalService, alert method');

        const modalRef = this.ngbModal.open(ModalContentComponent);
        modalRef.componentInstance.score = content;
        
        modalRef.result.then(
            (ok) => {
                this.eventService.trigger('ON_RESULT_QUIZ_MODAL_CLOSED', {isDismiss: false});
            },
            (dismiss) => {
                this.eventService.trigger('ON_RESULT_QUIZ_MODAL_CLOSED', {isDismiss: true});              
            }
        );
    }
}

