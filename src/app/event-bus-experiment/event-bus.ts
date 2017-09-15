import * as _ from 'lodash';
import { Lesson } from '../shared/model/lesson';

export interface Observer {
      next(data: any);
}

export interface Observable{
      subscribe(obs: Observer);
      ubsubscribe(obs: Observer);
}

interface Subject extends Observable,Observer{
     
}

class SubjectImpl implements Subject{
      private observers:Observer[] = [];

      constructor(){
            this.observers = [];
      }

      subscribe( obs: Observer) {
            this.observers.push(obs);
      }
      ubsubscribe(obs: Observer) {
            _.remove(this.observers,observer=> observer===obs);
      }
      next(data: Lesson[]) {
           this.observers.forEach(observer=>{
                 observer.next(data);
           });
      }

}


class DataStore {
      private lessons :Lesson[];
      private lessonsListSubject = new SubjectImpl();

      lessonsList$:Observable = {
            subscribe:obs=>{
                  this.lessonsListSubject.subscribe;
                  obs.next(this.lessons);
            },
            ubsubscribe: obs=>this.lessonsListSubject.ubsubscribe
      }; 
      initializeLessonsList(lessonsList:Lesson[]){
            this.lessons =  _.cloneDeep(lessonsList);
            //this.broadcast();
      }

      broadcast(){
            this.lessonsListSubject.next(_.cloneDeep(this.lessons));
      }

      addLesson(newLesson:Lesson){
            this.lessons.push(_.cloneDeep(newLesson));
      }
      
}

export const store =  new DataStore();