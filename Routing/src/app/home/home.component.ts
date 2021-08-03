import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routes: [
    {linkName : 'Home', Url : '/home'},
    {linkName : 'Settings', Url : '/settings'}
  ];

  homeRoute='/home';
  settingsRoute='/settings';

  rutes: ['abc','def']

  constructor() { }

  ngOnInit(): void {
  }

}
