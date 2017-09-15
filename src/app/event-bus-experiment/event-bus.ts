import * as _ from 'lodash';

export const LESSON_LIST_AVIALABLE = "NEW_LIST_AVIALABLE";
export const ADD_NEW_LESSON = "NEW_LIST_AVIALABLE";

export interface Observer {
      notify(data: any);
}

interface Subject {
      registerObserver(type:string,obs: Observer);
      unRegisterObserver(type:string,obs: Observer);
      notifyObservers(type:string,data: any);
}

class EventBus implements Subject {
      private observerCollection : {[key:string]:Observer[]} = {};


      registerObserver(type:string,obs: Observer) {
            this.observersPerEventType(type).push(obs);
      }
      unRegisterObserver(type:string,obs: Observer) {
            _.remove(this.observersPerEventType(type),item=>item===obs);
      }
      notifyObservers(type:string,data: any) {
            this.observersPerEventType(type).forEach(observer=>{
                  observer.notify(data);
            });
      }
   
      private observersPerEventType(eventType:string) {
            const observersType = this.observerCollection[eventType];
            if(!observersType){
                  this.observerCollection[eventType] = [];
            }

            return this.observerCollection[eventType];
      }
}

export const globalEventBus = new EventBus();