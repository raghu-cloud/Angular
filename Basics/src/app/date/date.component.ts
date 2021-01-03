import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  date:String ;

  someNumber: number=10;

  @Input('timee') time:string;



  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.date =currentDate.toDateString()+'  '+currentDate.toLocaleTimeString();
    },1000);
  }

  ngOnInit(): void {
  }

  addTwoNumber(a: number,b: number): number{
    return a + b;
  }

}
