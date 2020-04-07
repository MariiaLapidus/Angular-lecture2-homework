import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../models/PostModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
    // this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts').subscribe(value => {
    //   console.log(value);
    //   this.posts = value;

    // });
  }
  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
    // jhjhj
  }
  getPost(id: number) {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts/${id}');
  }
}
