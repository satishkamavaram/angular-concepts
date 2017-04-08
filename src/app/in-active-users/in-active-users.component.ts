import { Component, OnInit,Input } from '@angular/core';
import {UserServices} from './../services/User.services';

@Component({
  selector: 'app-in-active-users',
  templateUrl: './in-active-users.component.html',
  styleUrls: ['./in-active-users.component.css']
})
export class InActiveUsersComponent implements OnInit {

    @Input() id : number;
    @Input() user : {name:String,status:String} ;

    constructor(private userServices : UserServices ) { }

    ngOnInit() {

    }

    updateStatus(status:string) {
      this.userServices.updateStatusToactive(this.id,status);
    }
}
