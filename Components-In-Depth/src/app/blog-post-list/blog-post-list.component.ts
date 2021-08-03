import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogPost } from '../blog-post-tile/blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {

  @Input() blogPosts: BlogPost [][];

  @ViewChildren('tile') blogPostTileComponent  : QueryList<BlogPostTileComponent>;

  currentPage: number;

  

  constructor() { 
  }

  ngOnInit(): void {
    this.currentPage=0;   
  }

  updatePage(pageNumber){
    this.currentPage=pageNumber;
  }

  favouriteAll(){
    this.blogPostTileComponent.forEach(post => post.markAllFavourite());
  }

  

  expandAllorCollapse(){
    this.blogPostTileComponent.forEach(e => e.expandOrCollapse());
  }

 

 

}
