import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestingComponent } from './testing/test.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    SuccessAlertComponent,
    ServersComponent,
    ServerComponent,
    DangerAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
