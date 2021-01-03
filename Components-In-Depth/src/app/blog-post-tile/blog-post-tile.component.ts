import { Component, Input, OnInit } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';
import { BlogPost } from './blog-post';

@Component({
  selector: 'blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() blogposts : BlogPost ;

  title : string;
  summery : string;
  
  shortSummary : string ;

  fullSummery : string;

  isFull : boolean ;

  isFavorite: boolean;

  isExpande: boolean;


  constructor(private truncate : TruncatePipe) { 
  }

  ngOnInit() {
    this.fullSummery=this.blogposts.summary;
   this.shortSummary = this.truncate.transform(this.fullSummery,300);
  }

  changeSummary(){
    this.isFull=!this.isFull;
  }

  expandOrCollapse(){ 
    this.isExpande=!this.isExpande;
    if(this.isExpande){
    this.shortSummary=this.blogposts.summary;
    }else{
    this.fullSummery=this.blogposts.summary;
    }
  }


  markFavorite(){
    this.isFavorite=!this.isFavorite;
  }

  

}
