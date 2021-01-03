import { BlogPost } from './blog-post';

describe('BlogPost', () => {
  it('should create an instance', () => {
    expect(new BlogPost("test-title","test-summary")).toBeTruthy();
  });
});
