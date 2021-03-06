  import { Component,Output,OnInit,OnDestroy } from '@angular/core';
import {UserServices} from './services/User.services';
import {CounterService} from './services/counter.service';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{
  title = 'Angular4 Concepts!';
  evenList : number [] = [];
  oddList : number[] = [];

users :{name:String,status:String} [] = [];
inactiveUsers : {name:String,status:String} [] = [];
activeCount : number = 0;
inactiveCount : number = 0;

testObservables : Subscription ;
constructor(private userServices : UserServices ,private counterService : CounterService) {

}

ngOnInit() {
   this.users = this.userServices.users;
   this.inactiveUsers = this.userServices.inActiveusers;
   this.activeCount =  this.users.length;
   this.userServices.activeUsers.subscribe(
     (active:number) => (this.activeCount=active)
   );
    this.inactiveCount = this.inactiveUsers.length;
    this.userServices.inactiveUsers.subscribe(
      (inactive:number) => (this.inactiveCount=inactive)
    );

    //Observables
    const testmyObservables  = Observable.create((observer : Observer<string>)=>
  {
      setTimeout(()=>{
        observer.next('first observer');
      },2000);
      setTimeout(()=>{
        observer.next('second observer');
      },4000);
      setTimeout(()=>{
       observer.error('error observer');
      },6000);
      setTimeout(()=>{
       observer.complete();
     },8000);
     setTimeout(()=>{
       observer.next('third observer');
     },10000);
  });

  this.testObservables = testmyObservables.subscribe(
    (data:String) =>{
      console.log(data);
    },
    (error:String) =>{
      console.log(error);
    },
    (complete:String) =>{
      console.log(complete+" ,completed");
    }

  );

}


onEventListen (firedNumber: number) {
   if(firedNumber%2===0){
     this.evenList.push(firedNumber);
   } else {
     this.oddList.push(firedNumber);
   }
}

ngOnDestroy() {
  this.testObservables.unsubscribe();
}
}
