import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'add-worker-dialog.component',
  templateUrl: 'add-worker-dialog.component.html',
  styleUrls: ['add-worker-dialog.component.scss'],
})
export class DialogDataExample {
  constructor(public dialog: MatDialog) {}

}

@Component({
  selector: 'add-worker-dialog.component',
  templateUrl: 'add-worker-dialog.component.html',
})
export class AddWorkerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}