import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Services
import { EventService } from '../EventService/event.service';

@Injectable()
export class BusyIndicatorService {

    isLoading = {
        counter:0,
        errors: []
    }

    constructor( private eventService: EventService ){ }

    setBusyIndicatorState(state){
        if(state == true){
            this.isLoading.counter += 1;
        } else if(state == false) {
            this.isLoading.counter -= 1;
        } else {
            console.log('error');
        }
    }

    getBusyIndicatorsState(subject){
        if(this.isLoading.counter !== 0){
            subject.next(true);
        } else {
            subject.next(false);
        }
    }
}
