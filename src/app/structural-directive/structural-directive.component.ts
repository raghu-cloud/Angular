import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  public colors=['red','green','yellow','orange'];

  public stringManupulation="Extracting this string  from   typescript file";

  public lowerCase="SUNTECHNOLOGIES";

  public color="orange";

  public inputId=10;

  public styleClass="text-success";

  public styleClass2="text-dangor"

  public boolean=false;

  public stylesColor="green";

  public stylesGroup={
    color:"blue",
    fontStyle:"italic"
  }

  public  stringManupulatedMethod(){
    return "Method called";

  }

  public ngIF=false;

  public hasErrors=true;

  public s={
    "text-success":this.hasErrors,
    "text-dangor":this.hasErrors
  }

  public name1="suntechh";

  public b=false;

  public class="text-success";

  public eventType="";

  public ngClassTesting={
    "text-success":false,
    "text-dangor":false
  }

  public ngStyleTesting={
    color:'orange',
    fontStyle:'italic'
  }

  public property='Hello suntechnologies';

  public greetElement="";
  public propertyBindingTest(){
    this.property="setting the value of property from propertyBindingTest method";
  }

  public onClick(event){
    this.eventType=event.type;
  }

  public refVar(value){
    console.log(value); 
   }

  constructor() {
    /* setTimeout(function(){ alert("Hello"); }, 3000); */

   }

  ngOnInit(): void {
  }
 

  

  
  

}
