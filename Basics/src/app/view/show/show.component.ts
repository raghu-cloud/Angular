import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  input: String;

  resp: any;

  fetchData(){
      this.http.get('https://api.github.com/users/'+this.input)
      .subscribe((response) => {
      this.resp=response;
      console.log(this.resp)
    })
  };

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

}
