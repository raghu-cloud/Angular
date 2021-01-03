import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'passint-inputs-to-components',
  templateUrl: './passint-inputs-to-components.component.html',
  styleUrls: ['./passint-inputs-to-components.component.css']
})
export class PassintInputsToComponentsComponent implements OnInit, OnChanges {

  @Input('name') input: String ;

  user ;

  constructor() {
    
    
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchange called")
  }

  ngOnInit(): void {
    this.user={
      name : this.input,
      title : 'Software-Developer',
      address : 'Bangalore-560064',
      phone: [
          '9473848598',
          '8493566545'
        ]
    }
  }

 

}
