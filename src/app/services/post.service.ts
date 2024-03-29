import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
    
  constructor(private httpClient: HttpClient) { }
   
  getPosts(){
    return this.httpClient.get(this.url);
  }

  createPost(postData: any) {
    return this.httpClient.post<any>(this.url, postData);
  }
 
  deletePost(id: number){
    return this.httpClient.delete(this.url+'/'+id);
  }
  
}
