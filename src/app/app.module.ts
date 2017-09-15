import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserEventExperimentComponent } from './browser-event-experiment/browser-event-experiment.component';
import { EventBusExperimentComponent } from './event-bus-experiment/event-bus-experiment.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentComponent,
    EventBusExperimentComponent,
    LessonsCounterComponent,
    LessonsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
