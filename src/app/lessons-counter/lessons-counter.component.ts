import { Component, OnInit } from '@angular/core';
import { store, Observer } from '../event-bus-experiment/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer,OnInit {
  

  lessonsCounter: number;
  
  constructor() { 
   
  }

  ngOnInit(): void {
    console.log('Lesson counter is registered to an observer');
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log("counter");
    this.lessonsCounter = data.length;
  }
}
