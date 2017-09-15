import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { Observer, store } from '../event-bus-experiment/event-bus'


@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer, OnInit {

  lessons: Lesson[] = [];

  constructor() {
    
  }

  ngOnInit() {
    console.log('lesson List component subscribing to lessons data');
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Lesson List Component Recieved Data');
    this.lessons = data;
  }

  select(lesson) {
  }

  toggleLessonViewd(lesson: Lesson) {
    lesson.completed = !lesson.completed;
  }
}
