import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event-bus';
import { testLessons } from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiment',
  templateUrl: './event-bus-experiment.component.html',
  styleUrls: ['./event-bus-experiment.component.css']
})
export class EventBusExperimentComponent implements OnInit {


  ngOnInit() {
    console.log('Top Levele Component Broadcasting all lessons');
    globalEventBus.notifyObservers("NEW_LIST_AVIALABLE",testLessons);
  }

  addLesson(value:String){
    console.log(value);
  }

}
