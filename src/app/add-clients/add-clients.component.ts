import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-clients',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './add-clients.component.html',
  styleUrl: './add-clients.component.css'
})
export class AddClientsComponent {

  posts: any;
  newPost: any = {}; 
  formData: any = {};
  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }

  onSubmit() {
    this.createPost(this.formData);
  }

  createPost(formData: any) { 
    const id = this.generateUniqueId();
    const postData = { ...formData, id: id };
    formData.id = id;
    this.service.createPost(postData)
    .subscribe(() => {
      this.posts.push(postData);
      this.newPost = {};
      this.resetFormData();
    });
  }

  resetFormData() {
    this.formData = { title: '', body: '' };
  }
  generateUniqueId(): number {
    return this.posts.length + 1;
  }

}
