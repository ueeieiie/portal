import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {

    constructor(){}

    private events = {};

    public observe(eventName){
        return this.getEvent(eventName);
    }

    public trigger(eventName, data?){
        this.getEvent(eventName).next(data);
    }

    private getEvent(eventName){
        if (!this.events[eventName]){
            this.events[eventName] = new Subject();
        }
        return this.events[eventName];
    }
}
