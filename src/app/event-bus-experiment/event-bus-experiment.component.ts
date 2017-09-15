import { Component, OnInit } from '@angular/core';
import { globalEventBus, ADD_NEW_LESSON, LESSON_LIST_AVIALABLE } from './event-bus';
import { testLessons } from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiment',
  templateUrl: './event-bus-experiment.component.html',
  styleUrls: ['./event-bus-experiment.component.css']
})
export class EventBusExperimentComponent implements OnInit {

  ngOnInit() {
    console.log('Top Levele Component Broadcasting all lessons');
    globalEventBus.notifyObservers(LESSON_LIST_AVIALABLE,testLessons.slice(0));
  }

  addLesson(value:String){
    console.log("adding new lesson");
    globalEventBus.notifyObservers(ADD_NEW_LESSON,value);
  }

}
