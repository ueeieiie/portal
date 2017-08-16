import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable } from 'rxjs';

// ModalComponent
import { ModalContentComponent } from '../../components/modal-content/modal-content.component';

@Injectable()
export class ModalService{

    constructor(private ngbModal: NgbModal) {}
   
    /**
     * alert() method:
     * 
     * this triggers a modal at the end of the game
     * @param {String} content 
     */
    alert(content: string){          
        return new Observable((observer) => {
            const modalRef = this.ngbModal.open(ModalContentComponent);
            modalRef.componentInstance.score = content; 
            modalRef.result.then(
                res => {
                    observer.next();
                    observer.complete();
                },
                err => {
                    observer.error();
                });
        });
    }
}



