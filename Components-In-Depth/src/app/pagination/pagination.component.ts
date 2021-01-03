import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @Input() noOfPages : any;
  @Output() clickedPage = new EventEmitter<number>();

  pageArray = [];

  constructor() { }

  ngOnInit(): void {
    this.pageArray=new Array(this.noOfPages);
  }

  pageClicked(pageNumber:number){
    this.clickedPage.emit(pageNumber);
  }

}
