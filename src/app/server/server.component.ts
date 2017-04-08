import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styleUrls :  ['./server.component.css']

})
export class ServerComponent {
    displayPara = false;
    lists = [];
    counter = 0;

    onDisplayDetails() {
        this.displayPara  = !this.displayPara  ;
        this.lists.push(this.counter++);
    }

    displayParagraph () {
      return this.displayPara;
    }

}
