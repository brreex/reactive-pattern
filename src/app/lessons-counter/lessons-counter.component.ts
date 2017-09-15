import { Component, OnInit } from '@angular/core';
import { Observer, globalEventBus, LESSON_LIST_AVIALABLE, ADD_NEW_LESSON } from '../event-bus-experiment/event-bus';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer {
  
  lessonsCounter: number;
  
  constructor() { 
    globalEventBus.registerObserver(LESSON_LIST_AVIALABLE,this);

    globalEventBus.registerObserver(ADD_NEW_LESSON,{
      notify:lessonText=>{
        this.lessonsCounter+=1;
      }
    });
  }


  notify(data: any) {
    this.lessonsCounter = data.length;
  }
}
