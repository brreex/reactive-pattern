import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiment',
  templateUrl: './browser-event-experiment.component.html',
  styleUrls: ['./browser-event-experiment.component.css']
})
export class BrowserEventExperimentComponent implements OnInit {

  hoverSection:HTMLElement;
  
  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove',this.onMouseMove);
  }

  unsubscribe(){
    this.hoverSection.removeEventListener('mousemove',this.onMouseMove);

     console.log('Unsubscribed');
  }

  onMouseMove(evt:MouseEvent){
    console.log(evt);
  }

}
