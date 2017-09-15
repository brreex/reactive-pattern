import { Component, OnInit } from '@angular/core';
import { testLessons } from '../shared/model/test-lessons';
import { store } from './event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'event-bus-experiment',
  templateUrl: './event-bus-experiment.component.html',
  styleUrls: ['./event-bus-experiment.component.css']
})
export class EventBusExperimentComponent implements OnInit {

  constructor() {
    console.log('Top Levele Component Broadcasting all lessons');
    store.initializeLessonsList(testLessons.slice(0));

    setTimeout(() => {
      const newLesson: Lesson = {
        id: Math.random(),
        description: "New Lesson From BackEnd"
      }
      //TODO
      store.addLesson(newLesson)

    }, 10000);
  }

  ngOnInit() {
  }

  addLesson(value: string) {
    console.log("adding new lesson");
    //TODO
    store.addLesson({ id: Math.random(), description: value });
  }

}
