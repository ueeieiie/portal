import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  
    constructor(){}

    events = {};

    observe(eventName){
        return this.getEvent(eventName);
    }

    trigger(eventName, data?){        
        this.getEvent(eventName).next(data || {});
    }

    getEvent(eventName){
        if (!this.events[eventName]){
            this.events[eventName] = new Subject();
        }
        return this.events[eventName];
    }
   
}
















// first try

    // events = {
    //     modalAlert: this.modalService.alert
    // };

    // emit(event, data?:any) {
    //     let subject = new Subject();

    //     return this.events[event](data).then(
    //         (val) => {
    //             console.log(val)
    //             return subject.next();
    //         },
    //         (err) => {
    //             console.log(err);
    //             return subject.error(err);
    //         }
    //     );
    // }



// second try - after trying to understand the correct architecture of eventService from what I heard and read
                /*  
                    EventService suppose to be dumb, a black box.
                    it should not import modalService, but return 
                    a subject to whoever used the callEvent.
                    
                    I'm not sure who suppose to invoke EventService.callEvent()
                    is it my quizComponent?
                    is it suppose to start inside the modalService?
                    if so then It should not also be invoked from the quizComponent, 
                    cuz its double invoking, and its wrong!

                    my intuition is to start the chain of triggers from the quizComponent,
                    cuz this is the current view, and it should orchestrate the system's chain of events.

                    when the quiz ends, getScore() fires, and the quizFinalMessage should 
                    find a way to appear with the modal.
                    
                */

    // events = {};
    
    //  constructor(
    //      private modalService: ModalService
    //  ){ }
 
    //  emit(event: string, data?: any): void {
    //      if (!this.events[event]) {
    //          this.events[event] = {subject: new Subject(), data: data};
    //      }
    //      this.events[event].subject.next(data);
    //      console.log('Event emitted:', this.events[event]);
    //  }
 
    //  callEvent(event: string): Subject<any> {
    //      if (!this.events[event]) {
    //          this.events[event] = new Subject();
    //      }
    //      return this.events[event];
    //  }