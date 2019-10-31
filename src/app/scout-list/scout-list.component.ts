import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppstateService } from '../appstate.service';
import {MatDialog} from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as moment from 'moment';
import {AddWorkerDialogComponent} from '../add-worker-dialog/add-worker-dialog.component'

@Component({
  selector: 'app-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ]
})
export class ScoutListComponent implements OnInit {
  loading;
  show_completed = true;

  search_val = "";

  scouts;
  missions;

  calendar = false;
  constructor(
    private dataService: DataService,
    private appstateService: AppstateService,
    public dialog: MatDialog
  ) { }

  setSearchVal(val) {
    this.search_val = val;
  }

  openDialog(job) {
    this.dialog.open(AddWorkerDialogComponent, {
      data: {
        scouts: this.scouts,
        job,
        setWorker: this.setWorker.bind(this)
      },
      hasBackdrop: true
    });
  }

  toggleView() {
    this.calendar = !this.calendar;
  }

  toggleShowCompleted() {
    this.show_completed = !this.show_completed;
  }

  completeMission(id) {
    this.appstateService.setComplete(id);
  }

  setWorker(job_id, worker) {
    this.appstateService.assignWorkerToJob(job_id, worker);
  }

  ngOnInit() {
    this.loading = true;
    this.dataService.getData()
    .subscribe(
      res => {
        
        this.appstateService.setWorkers(res[0]['results']);
        this.appstateService.setJobs(
          res[1]['results']
          .map(i => (
            {
              ...i, 
              start: moment(i.date + ' ' + '08:00'),
              end: moment(i.date + ' ' + '17:00')
            })
          )
        )

        this.scouts = this.appstateService.workers;
        this.missions = this.appstateService.jobs;

        this.loading = false;
      },
      err => {
        console.log("API ERROR", err);
        alert("An error occurred while fetching data")
      }
    )
  }
}
