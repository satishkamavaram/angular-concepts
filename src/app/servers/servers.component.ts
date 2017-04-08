import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    username = '';
    usernameEmpty = true;
  constructor() { }

  ngOnInit() {
  }

    onChangeUserName(event : Event){
      this.username = (<HTMLInputElement>event.target).value;
      this.isUserNameEmpty();
    }

    isUserNameEmpty() {
         if(this.username.length === 0)
            this.usernameEmpty = true;
         else
            this.usernameEmpty = false;
    }

    emptyUsername() {
      this.username = '';
      this.usernameEmpty = true;
    }
}
