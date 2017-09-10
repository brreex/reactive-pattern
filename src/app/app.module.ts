import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserEventExperimentComponent } from './browser-event-experiment/browser-event-experiment.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
