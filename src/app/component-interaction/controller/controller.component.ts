import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  /*  i : number=0;
    lists = [];
    interval ;
    startButtonStatus = false;
    stopButtonStatus = true;

  constructor() { }

  ngOnInit() {
  }

  isEven(counter) {
    return counter%2===0;
  }



  onStartClick(){
    this.interval =  setInterval(()=>this.lists.push(this.i++),1000);
    this.startButtonStatus = true;
    this.stopButtonStatus = false;
  }


  onStopClick() {
    clearInterval(this.interval);
    this.startButtonStatus = false;
    this.stopButtonStatus = true;
    console.log(this.lists)
  }
*/
  @Output() intervalEvents = new EventEmitter<number>();
  startButtonStatus = false;
  stopButtonStatus = true;
  i : number=0;

  interval ;
  constructor() { }

  ngOnInit() {
  }
  onStartClick(){
    this.interval =  setInterval(()=>
    this.intervalEvents.emit(this.i++)
    ,1000);
    this.startButtonStatus = true;
    this.stopButtonStatus = false;
  }


  onStopClick() {
    clearInterval(this.interval);
    this.startButtonStatus = false;
    this.stopButtonStatus = true;
  }

}
