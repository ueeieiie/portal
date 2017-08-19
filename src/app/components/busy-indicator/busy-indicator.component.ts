import {Component, OnInit, OnDestroy, Input, OnChanges} from '@angular/core';
import {Subject} from 'rxjs';

// Services
import {EventService} from '../../services/EventService/event.service';
import {BusyIndicatorService} from '../../services/BusyIndicatorService/busyIndicator.service';

@Component({selector: 'busy-indicator', templateUrl: './busy-indicator.component.html', styleUrls: ['./busy-indicator.component.scss']})
export class BusyIndicatorComponent implements OnInit {

    isLoading = false;

    constructor(
        private eventService: EventService,
        private busyIndicatorService : BusyIndicatorService
    ) {}

    ngOnInit() {
        this.eventService.observe('LOADING').subscribe(
            val =>{
                this.busyIndicatorService.setBusyIndicatorState( val );

                let subject = new Subject();
                subject.subscribe((val: boolean) => this.isLoading = val);

                this.busyIndicatorService.getBusyIndicatorsState(subject);
            }
        );
    }
}
