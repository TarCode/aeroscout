import {
  Component, 
  Inject
} from '@angular/core';

import {
  MatDialogRef, 
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import {
  Worker,
  Mission,
  SetWorkerFunc
} from '../interfaces/appdata';

export interface DialogData {
  workers:Array<Worker>,
  job : Mission,
  setWorker:SetWorkerFunc
}

@Component({
  selector: 'add-worker-dialog.component',
  templateUrl: 'add-worker-dialog.component.html',
})
export class AddWorkerDialogComponent {
  selectedWorker:Worker;
  constructor(
    public dialogRef: MatDialogRef<AddWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}