import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MissionsComponent } from './missions/missions.component';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatDialogModule, 
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material/dialog';

import { AddWorkerDialogComponent } from './add-worker-dialog/add-worker-dialog.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component'



@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    AddWorkerDialogComponent,
    FullCalendarComponent
  ],
  entryComponents: [
    AddWorkerDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MissionsComponent }

    ]),
    BrowserAnimationsModule,

    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
