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
    alert(subject, content){          
        const modalRef = this.ngbModal.open(ModalContentComponent);
        modalRef.componentInstance.score = content; 

        modalRef.result.then(
            (ok)=>{
                subject.next(ok);
                subject.complete();
            },
            (dismiss) => {
                subject.error(dismiss);
            }
        )
        
        
        // return subject.subscribe({
        //     next: function(content){
        //     },
        //     error: function(err){
        //         console.log('error:' , err)
        //     }
        // })
        
    }
}



// return new Observable((observer) => {
//     const modalRef = this.ngbModal.open(ModalContentComponent);
//     modalRef.componentInstance.score = content; 
//     modalRef.result.then(
//         res => {
//             observer.next();
//             observer.complete();
//         },
//         err => {
//             observer.error();
//         });
// });
