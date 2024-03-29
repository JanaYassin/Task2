// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GetClientsComponent } from './get-clients/get-clients.component';
import { PostService } from './services/post.service';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { AddClientsComponent } from './add-clients/add-clients.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FormsModule, TitleComponent, GetClientsComponent, AddClientsComponent]
})
export class AppComponent {

  title = 'httpClient';
  // posts: any;
  // newPost: any = {}; 
  // formData: any = {};

  constructor(private service: PostService) {}

  // ngOnInit() {
  //   this.service.getPosts()
  //     .subscribe(response => {
  //       this.posts = response;
  //     });
  // }

//   onSubmit() {
//     this.createPost(this.formData);
//   }

//   createPost(formData: any) { 
//     const id = this.generateUniqueId();
//     formData.id = id;
//     formData.userId = 10;
//     // console.log(formData);
//     this.service.createPost(formData) 
//         .subscribe(response => {
//             this.posts.push(formData);
//             // console.log(formData);
 
//             this.newPost = {};    
//            });
// }
// generateUniqueId(): number {
//   return this.posts.length + 1;
// }

//   deleteItem(id: any){
//     console.log(id);
//     this.service.deletePost(id)
//         .subscribe(response => { 
//           console.log(response)   
//           this.posts = this.posts.filter((p:any) => p.id == id);
//         });
// }

}

