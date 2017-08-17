import { Component, OnChanges, Input } from '@angular/core';

// Services
import { EventService } from '../../services/EventService/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
	// @Input() isLoading: boolean = false;

	// constructor(
	// 	private eventService: EventService
	// ){}
	
	// ngOnChanges(){
	// 	console.log('isLoading', this.isLoading);
	// 	this.eventService.observe('LOADING').subscribe(res => {
	// 		this.isLoading = res;
	// 	});
	// }
	
}
