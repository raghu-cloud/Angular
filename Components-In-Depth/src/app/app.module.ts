import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { BlogDataService } from './blog-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostListComponent,
    BlogPostTileComponent,
    TruncatePipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TruncatePipe,
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
