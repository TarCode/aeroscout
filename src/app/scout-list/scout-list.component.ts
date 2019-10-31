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
  constructor(
    private dataService: DataService,
    private appstateService: AppstateService,
    public dialog: MatDialog
  ) { }

  openDialog(job) {
    const dialogRef = this.dialog.open(AddWorkerDialogComponent, {
      data: {
        scouts: this.scouts,
        job
      },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  completeMission(id) {
    this.appstateService.setComplete(id);
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
