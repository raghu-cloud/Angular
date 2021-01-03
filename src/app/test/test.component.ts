import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //selector:'.app-test',
  //selector: '[app-test]',
   template: `
    <div>Inside the Testing component</div>
    /* String Interpolation
    <h4>Welcome {{name }}</h4>
    <h4>{{"Welcome "+name  }}</h4>
    <h4>2+2</h4>
    <h4>{{2+2}}</h4>
    <h4>{{name.length}}</h4>
    <h4>{{name.toUpperCase()}}</h4>
    <h3>{{greetUser()}}</h3> */

  
    /* Property Binding
    <input type="text" value="Raghu">
    <input [disabled]="isDisables" type="text" value="Raghu">
    <input bind-disabled="isDisables" type="text" value="Raghu">
    <input [disabled]="false" type="text" value="Raghu"> */
    

    /* Class Binding
    <h4>class="text-success">CodeEvaluation</h4>
    <h4 [class]="sucessClass">CodeEvaluation</h4>
    <h4 class="text-success" [class]="errorClass">Danger Class</h4>
    <h4 class="text-special" [class]="successClass">Success class</h4>
    <h4 [class.text-danger]="hasErrors">Danger class</h4>
    <h4 [ngClass]="messages">Class binding</h4>  */  


    /*  Style  Binding 
    <h3 [style.color]="'orange'">Style binding testing</h3>
    <h3 [style.color]="hasErrors?'red':'green'">Style binding in Switch statement</h3>
    <h3 [style.color]=highligtedColor>sylte binding  testing 2 with orange color</h3>
    <h3 [ngStyle]="titleStyles">Style binding</h3> */

     /* Event binding 
     <button (click)="onClick($event)">Greeet</button>
     {{greet}}
     <button (click)="greet='welcome Rule1'">Greetinig</button> */ 

    <!--  Template Reference-->
    <input #refVar type="text">
    <button  (click)=logOnScreen(refVar.value)>Log</button>

    /*  Two Way Binding 
    <input [(ngModel)]="name1" type="text"><br>
    {{name1}} */

    /* Testing all 
     
     */

   `,
   styles: [`  
  {
    div{
    color:red
  }
  h3{
    color:green
  }
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
 } `]

})
   
 
export class TestComponent implements OnInit {

  public name1;

  public name  =  "Code Evolution";

  public errorClass="text-danger";

  public successClass="text-success";

  public greet="";

  hasErrors = false;
  isSpecial=true;
  
  public greetUser(){
    return  "hello "+this.name;
  }

  public messages={
    "text-success":!this.hasErrors,
    "text-danger" : this.hasErrors,
    "text-special":this.isSpecial
  }

  public titleStyles={
    color:"blue",
    fontStyle: "italic"
  }

  public isDisables=false;

  public sucessClass="text-success";

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event){
    console.log(event);
    this.greet=event.type;
  }

  public logOnScreen(value){
    console.log(value);
  }
  public suntechnologies="suntechnologies";
  public bool=false;
  public highligtedColor="orange";
}
  