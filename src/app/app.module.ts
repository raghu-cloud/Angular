import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { BoostrapPracticeComponent } from './boostrap-practice/boostrap-practice.component';
import { Test2Component } from './test2/test2.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectiveComponent,
    BoostrapPracticeComponent,
    Test2Component,
    EmployeesListComponent,
    EmployeeDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
