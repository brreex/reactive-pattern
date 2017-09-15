import { Component } from '@angular/core';
import { globalEventBus } from '../event-bus-experiment/event-bus';
import { Lesson } from '../shared/model/lesson';
import { Observer, LESSON_LIST_AVIALABLE } from '../event-bus-experiment/event-bus'


@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
}) 
export class LessonsListComponent implements Observer{
  
  lessons:Lesson[] = [];

  constructor(){
    console.log('lesson List component subscribing to lessons data');
    globalEventBus.registerObserver(LESSON_LIST_AVIALABLE,this);
  }

  notify(data:Lesson[]){
    console.log('Lesson List Component Recieved Data');
    this.lessons = data;
  }

  select(lesson){
    
  }
}