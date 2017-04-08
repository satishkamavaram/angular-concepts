import { Component, OnInit,Input } from '@angular/core';
import {UserServices} from './../services/User.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {


  @Input() id : number;
  @Input() user : {name:String,status:String} ;

  constructor(private userServices : UserServices ) { }

  ngOnInit() {

  }

  updateStatus(status:string) {
    this.userServices.updateStatusToinactive(this.id,status);
  }
}
