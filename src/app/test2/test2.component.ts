import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';



@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input('parentData') public firstName;
  @Output() public childEvent=new EventEmitter();

  name='';

  color="pink";

  public colors=["Blue","Green","Yello","Black"];

  constructor() { }

  public fireEvent(){
    this.childEvent.emit('Welcome to codeEvolution');
  }

  ngIF=true;

  displayName=false;

  ngOnInit(): void {
  }

  onClick(event){
    console.log("This is event binding example");
    console.log(event);
  }

  onClickofInput(value){
    console.log(value);
  }

  onClickOfInput1(event){
    console.log(event);
  }

  newName="Welcome to CodeEvulution";

  public person={
    "firstName":"raghu",
    "lastName":"patil"
  }

  public employes=[
    {"id":1,"name":"Raghu","age":24},
    {"id":2,"name":"Siddu","age":27}
  ]

}
