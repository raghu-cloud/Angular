import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './address-card/user';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 user:User;

  constructor(private svc : TestServiceService, private http : HttpClient){
    this.user=this.svc.createUser();
  }

  callServiceMethod(){
    this.svc.printToConsole("Service method gets called");
  }

  ngOnInit(){

  }

  getGithubData(){
    

  }



  

  
  title = 'Java-brains';

  test: String ;

  
}
