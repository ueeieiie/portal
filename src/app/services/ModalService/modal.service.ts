import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

// ModalComponent
import { ModalContentComponent } from '../../components/modal-content/modal-content.component';

@Injectable()
export class ModalService{
    closeResult: string;
    
    constructor( private ngbModal: NgbModal ){ }
   
    /**
     * alert() method:
     * 
     * this triggers a modal at the end of the game
     * @param {String} content 
     */
    alert(content){
        return new Observable( observer => {
            const modalRef = this.ngbModal.open(ModalContentComponent);
            modalRef.componentInstance.score = content; 
            observer.next();  
            observer.complete();
        });

    }
}