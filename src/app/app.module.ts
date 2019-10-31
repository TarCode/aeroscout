import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScoutListComponent } from './scout-list/scout-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AddWorkerDialogComponent } from './add-worker-dialog/add-worker-dialog.component';


import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { FullCalendarComponent } from './full-calendar/full-calendar.component'

@NgModule({
  declarations: [
    AppComponent,
    ScoutListComponent,
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
      { path: '', component: ScoutListComponent }

    ]),
    BrowserAnimationsModule,

    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
