import { 
  Component, 
  OnInit 
} from '@angular/core';
import { DataService } from '../services/data/data.service';
import { AppstateService } from '../services/appstate/appstate.service';
import { MatDialog } from '@angular/material/dialog';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition 
} from '@angular/animations';
import * as moment from 'moment';
import {
  AddWorkerDialogComponent
} from '../add-worker-dialog/add-worker-dialog.component'

import {
  Worker,
  Mission,
  WorkerResponse,
  MissionReponse
} from '../interfaces/appdata';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ]
})

export class MissionsComponent implements OnInit {
  loading:boolean;
  show_completed:boolean = true;
  search_val:string = "";
  workers:Array<Worker>;
  missions:Array<Mission>;

  calendar = false;
  constructor(
    private dataService: DataService,
    private appstateService: AppstateService,
    public dialog: MatDialog
  ) { }

  setSearchVal(val:string) {
    this.search_val = val;
  }

  openDialog(job:Mission) {
    this.dialog.open(AddWorkerDialogComponent, {
      data: {
        workers: this.workers,
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

  completeMission(id:number) {
    this.appstateService.setComplete(id);
  }

  setWorker(job_id:number, worker:Worker) {
    this.appstateService.assignWorkerToJob(job_id, worker);
  }

  ngOnInit() {
    this.loading = true;
    this.dataService.getData()
    .subscribe(
      (res: [WorkerResponse, MissionReponse]) => {
        
        this.appstateService.setWorkers(res[0].results);
        this.appstateService.setJobs(
          res[1].results
          .map((mission:Mission) => (
            {
              ...mission, 
              start: moment(mission.date + ' ' + '08:00'),
              end: moment(mission.date + ' ' + '17:00')
            })
          )
        )
        this.workers = this.appstateService.workers;
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
