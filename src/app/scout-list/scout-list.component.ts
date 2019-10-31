import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppstateService } from '../appstate.service';
import {MatDialog} from '@angular/material/dialog';
import {AddWorkerDialogComponent} from '../add-worker-dialog/add-worker-dialog.component'

@Component({
  selector: 'app-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss']
})
export class ScoutListComponent implements OnInit {
  scouts;
  missions;

  calendar = false;
  constructor(
    private dataService: DataService,
    private appstateService: AppstateService,
    public dialog: MatDialog
  ) { }

  openDialog(job) {
    const dialogRef = this.dialog.open(AddWorkerDialogComponent, {
      data: {
        scouts: this.scouts,
        job,
        setWorker: this.setWorker.bind(this)
      },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  toggleView() {
    this.calendar = !this.calendar;
  }

  completeMission(id) {
    this.appstateService.setComplete(id);
  }

  setWorker(job_id, worker) {
    this.appstateService.assignWorkerToJob(job_id, worker);
  }

  ngOnInit() {
    this.dataService.getData()
    .subscribe(
      res => {
        this.scouts = res[0]['results'];

        this.appstateService.setJobs(res[1]['results']);
        this.missions = this.appstateService.jobs;

        console.log("API RESPONSE", this.missions);
      },
      err => {
        console.log("API ERROR", err);
        
      }
    )
  }
}
