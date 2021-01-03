import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  isCollapsed : boolean = true;

  @Input('userObject') usrObj: User

  constructor() { }

  ngOnInit(): void {
  }

  showDropDown(){
    this.isCollapsed=!this.isCollapsed;
  }

}
