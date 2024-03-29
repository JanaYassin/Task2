import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Import RouterModule if you need to use RouterLink or other routing functionalities
import { RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-get-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Include RouterModule only if needed
  templateUrl: './get-clients.component.html',
  styleUrls: ['./get-clients.component.css'] // Changed to styleUrls and used an array
})
export class GetClientsComponent {
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

  deleteItem(id: any){
    this.service.deletePost(id)
        .subscribe(() => { 
          this.posts = this.posts.filter((p: any) => p.id !== id);
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
