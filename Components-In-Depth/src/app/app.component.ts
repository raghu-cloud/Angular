import { Component } from '@angular/core';
import { BlogDataService } from './blog-data.service';
import { BlogPost } from './blog-post-tile/blog-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  blogPosts: BlogPost [][] = [];
  
  constructor(private blogDataService : BlogDataService){

  }

  ngOnInit(): void {
    this.blogPosts=this.blogDataService.getData();   
  }




}
