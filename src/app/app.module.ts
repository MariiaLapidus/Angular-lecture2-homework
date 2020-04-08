import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
import { UserComponent } from './component/user/user.component';
import { CommentComponent } from './component/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // подключение к библиотеке
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
