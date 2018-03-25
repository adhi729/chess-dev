import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Blog } from '../class_defs/blog_item';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  blogs : Blog[];
  getBlogs(): void{
  	this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }
  constructor(private blogService: BlogsService) { }
  ngOnInit() {
  	this.getBlogs();
  }

}
