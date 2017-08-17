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
        this.getEvent(eventName).next(data);
    }

    getEvent(eventName){
        if (!this.events[eventName]){
            this.events[eventName] = new Subject();
        }
        return this.events[eventName];
    }
}
