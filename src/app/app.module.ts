import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import  { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ControllerComponent } from './component-interaction/controller/controller.component';
import { OddComponent } from './component-interaction/controller/odd/odd.component';
import { EvenComponent } from './component-interaction/controller/even/even.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InActiveUsersComponent } from './in-active-users/in-active-users.component';
import {UserServices} from './services/User.services';
import {CounterService} from './services/counter.service';
import { FormDirectiveComponent } from './templateform/form-directive/form-directive.component';
import { ReactiveFormDirectiveComponent } from './reactiveform/reactive-form-directive/reactive-form-directive.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ControllerComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InActiveUsersComponent,
    FormDirectiveComponent,
    ReactiveFormDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserServices,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
