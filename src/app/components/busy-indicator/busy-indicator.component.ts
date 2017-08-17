import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

// Services
import { EventService } from '../../services/EventService/event.service';

@Component({
  selector: 'busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss']
})
export class BusyIndicatorComponent implements OnInit {

  isLoading = false;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(){
    this.eventService.observe('LOADING').subscribe((res) => {
      console.log('res:', res);
      this.isLoading = res 
    });
  }
}
