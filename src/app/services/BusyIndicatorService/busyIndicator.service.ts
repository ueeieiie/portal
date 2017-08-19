import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Services
import { EventService } from '../EventService/event.service';

@Injectable()
export class BusyIndicatorService {

    data = {
        counter:0,
        isLoading: false,
        errors: []
    }

    constructor( private eventService: EventService ){ }

    incremetnt(){
        this.data.counter++;
        this.eventService.trigger('LOADING', this.data.counter)
    }


    decrement(){
        this.data.counter--;
        this.eventService.trigger('LOADING', this.data.counter)
    }
}
