import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../../models/PostModel';
import {UserModel} from '../../models/UserModel';
import {PostService} from '../../services/post/post.service';
import {UserService} from '../../services/user/user.service';
import {CommentModel} from '../../models/CommentModel';
import {CommentService} from '../../services/coment/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  msg = ' users';
  users: UserModel[] = [];
// HttpClient тип - класс библиотеки HttpClientModule автоматом подтянет в импорт
  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService) { // private - означает что из вне с другого класса к обьекту не кто не может достучаться
    // возможность инкапсуляции
    this.userService.getUsers().subscribe(users => {
      this.postService.getPosts().subscribe( posts => {
        this.commentService.getComments().subscribe(comments => {
          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (post.userId === user.id) {
                user.posts.push(post);
                post.comments = [];
                for (const comment of comments) {
                  if (comment.postId === post.id) {
                    post.comments.push(comment);
                  }
                }
              }
            }
            this.users.push(user);
          }
          console.log(this.users);
          this.commentService.getComments().subscribe();
        });
      });
    });
  }
}
