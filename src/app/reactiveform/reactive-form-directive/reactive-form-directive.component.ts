import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,Validators} from  '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-reactive-form-directive',
  templateUrl: './reactive-form-directive.component.html',
  styleUrls: ['./reactive-form-directive.component.css']
})
export class ReactiveFormDirectiveComponent implements OnInit {

   status = ['active','inactive','Suspended'];
   forbiddenProjectNames = ['testasync'];
   userForm : FormGroup
  constructor() { }

  ngOnInit() {
    this.userForm =  new FormGroup(
      {
    //    'pname' : new FormControl(null,[Validators.required,this.validateProjectname.bind(this)]),
      'pname' : new FormControl(null,[Validators.required],this.asycValidateProjectname.bind(this)),
        'email' : new FormControl(null,[Validators.required,Validators.email]),
        'status' : new FormControl('active')
      }
    );
    this.userForm.statusChanges.subscribe(
      (status=>{
      //  console.log('status changed ' );
      //  console.log(status );
      })
    );

    this.userForm.valueChanges.subscribe(
      (status=>{
    //    console.log('value changed ' );
    //    console.log(status );
      })
    );
  }

  OnSubmit(){
    console.log(this.userForm);
  }

//If validation is success , return null or empty
//returns errorcode with boolean.
  validateProjectname(control : FormControl): {[s:string]: boolean}{
    if("test"=== control.value){
      return   { 'forbidden': true};
    }
    return null;
  }

  asycValidateProjectname(control : FormControl) : Promise<any> | Observable<any>
  {
    const promise  = new Promise<any>(
      (resolve,reject)=>{
        setTimeout(()=>{
          console.log('timeout');
         if(this.forbiddenProjectNames.indexOf(control.value)!== -1){
      //    if("test"=== control.value){
            return  resolve({'forbidden': true});
          } else{
            return  resolve(null);
          }
        },3000);
      }
    );
    return promise;
  }
}
