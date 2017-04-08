import { Injectable,EventEmitter } from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UserServices {

  constructor(private counterService : CounterService) {

  }

  users = [
   {
     name : 'test1',
     status : 'active'
   },
   {
     name : 'test2',
     status : 'active'
   },
   {
     name : 'test3',
     status : 'active'
   },
   {
     name : 'test4',
     status : 'active'
   }
 ]


 inActiveusers = [
  {
    name : 'test5',
    status : 'inactive'
  },
  {
    name : 'test6',
    status : 'inactive'
  },
  {
    name : 'test7',
    status : 'inactive'
  },
  {
    name : 'test8',
    status : 'inactive'
  }
 ]

  activeUsers = new EventEmitter<number>();
  inactiveUsers = new EventEmitter<number>();

  updateStatusToinactive(id : number , status : string){
    console.log(id +'    '+ status);
    this.users[id].status = status;
    this.inActiveusers.push(this.users[id]);
    this.users.splice(id,1);
    console.log(this.users);
    console.log(this.inActiveusers);
    this.counterService.incrementInActiveCount();
    this.counterService.decrementActiveCount();
    this.activeUsers.emit(this.users.length);
    this.inactiveUsers.emit(this.inActiveusers.length);
  }

  updateStatusToactive(id : number , status : string){
    console.log(id +'    '+ status);
    this.inActiveusers[id].status = status;
    this.users.push(this.inActiveusers[id]);
    this.inActiveusers.splice(id,1);
    this.counterService.incrementActiveCount();
    this.counterService.decrementInActiveCount();
    this.activeUsers.emit(this.users.length);
    this.inactiveUsers.emit(this.inActiveusers.length);
  }

}
