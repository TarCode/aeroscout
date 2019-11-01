import {
  Component, 
  Inject
} from '@angular/core';

import {
  MatDialogRef, 
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

export interface DialogData {
  workers: [],
  job : { id: '', title: ''},
  setWorker: (arg1, arg2) => {}
}

@Component({
  selector: 'add-worker-dialog.component',
  templateUrl: 'add-worker-dialog.component.html',
})
export class AddWorkerDialogComponent {
  selectedScout;
  constructor(
    public dialogRef: MatDialogRef<AddWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}