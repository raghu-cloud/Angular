import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { PassintInputsToComponentsComponent } from './passint-inputs-to-components/passint-inputs-to-components.component';
import { FormsModule } from '@angular/forms';
import { AddressCardComponent } from './address-card/address-card.component';
import { TestServiceService } from './test-service.service';
import { HttpClientModule } from '@angular/common/http'
import { ViewModule } from './view/view.module';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ForLoopComponent,
    PassintInputsToComponentsComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ViewModule
  ],
  providers: [
    TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
