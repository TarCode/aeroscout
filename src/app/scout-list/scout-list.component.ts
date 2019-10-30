import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss']
})
export class ScoutListComponent implements OnInit {
  scouts;
  missions;
  constructor(
    private dataService: DataService
  ) { }

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
