import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    InActiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserServices,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
