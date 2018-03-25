import { Injectable } from '@angular/core';
import { Blog } from './class_defs/blog_item';
import { BLOGS } from './class_defs/mock_blog_items';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BlogsService {
	getBlogs(): Observable<Blog[]> {
		return of(BLOGS);
	}
  constructor() { }

}
