import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from './models/PostModel';
import {PostService} from './services/post.service'

@Component({
  selector: 'app-root',
  template: `<h1>Oll {{msg}}</h1>
  <app-post *ngFor="let p of posts"  [post]="p"></app-post>
  `,
  styles: [`h1{background: silver}`]
})
export class AppComponent {
  msg = ' posts';
  posts: PostModel[];
// HttpClient тип - класс библиотеки HttpClientModule автоматом подтянет в импорт
  constructor(private postService: PostService) { // private - означает что из вне с другого класса к обьекту не кто не может достучаться
    // возможность инкапсуляции
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

}
