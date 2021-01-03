import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  user={
    name : 'Raghu',
    title : 'Software-Developer',
    address : 'Bangalore-560064',
    phone: [
        '9473848598',
        '8493566545'
      ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
