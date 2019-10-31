import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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

  ngOnInit() {
    this.dataService.getData()
    .subscribe(
      res => {
        this.scouts = res[0]['results'];
        this.missions = res[1]['results'];
        console.log("API RESPONSE", this.missions);
      },
      err => {
        console.log("API ERROR", err);
        
      }
    )
  }
}
