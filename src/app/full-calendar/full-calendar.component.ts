import { 
  Component, 
  OnInit, 
  Input 
} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import * as moment from 'moment';
import { AppstateService } from '../services/appstate/appstate.service';

@Component({
   selector: 'app-full-calendar',
   templateUrl: './full-calendar.component.html',
   styleUrls: ['./full-calendar.component.scss']
})

export class FullCalendarComponent implements OnInit {
  @Input()
  set configurations(config: any) {
      if(config) {
        this.defaultConfigurations = config;  
      }
  }
  @Input() eventData: any;
   
  defaultConfigurations: any;
  constructor(
    private appstateService: AppstateService,
  ) {
    const data = appstateService.jobs;

    this.eventData = data;

    this.defaultConfigurations = {
        editable: false,
        eventLimit: true,
        titleFormat: 'MMM D YYYY',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        buttonText: {
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day'
        },
        views: {
          agenda: {
              eventLimit: 2
          }
        },
        allDaySlot: true,
        slotDuration: moment.duration('00:15:00'),
        slotLabelInterval: moment.duration('01:00:00'),
        defaultDate: this.eventData.length > 0 ? this.eventData[0].start : 1,
        firstDay: 1,
        selectable: true,
        selectHelper: true,
        events: this.eventData,
        defaultView: 'agendaWeek'
    };
   }
   ngOnInit() { 
    $('#full-calendar').fullCalendar(
      this.defaultConfigurations
    );
   }
}