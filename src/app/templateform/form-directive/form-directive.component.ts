import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-directive',
  templateUrl: './form-directive.component.html',
  styleUrls: ['./form-directive.component.css']
})
export class FormDirectiveComponent implements OnInit {

  @ViewChild('formSubmit') inputForm : NgForm;

  subscribtions = ['Free','Basic','Premium'];

  sensitivePwd ;
  showPwd : boolean = false;
  submitted : boolean = false;
  submittedData = {
    email :'',
    pwd : '',
    sub : '',
    opt : ''
 }

  constructor() { }

  ngOnInit() {

  }

  OnSubmit()
  {
    console.log(this.inputForm);
    this.submitted = true;
    this.submittedData.email = this.inputForm.value.email;
    this.submittedData.pwd = '****';
    this.sensitivePwd = this.inputForm.value.pwd;
    this.submittedData.sub = this.inputForm.value.selectedSubscription;
    this.submittedData.opt = this.inputForm.value.optIn ? "Thanks for Opting In" : "You are not Opted In";
    this.inputForm.reset();
  }

  show(){
    this.submittedData.pwd = this.sensitivePwd;
    this.showPwd = true;
  }

  hide() {
    this.submittedData.pwd = '****';
    this.showPwd = false;
  }


}
