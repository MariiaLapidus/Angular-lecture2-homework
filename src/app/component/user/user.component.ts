import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {UserModel} from '../../models/UserModel';
import {CommentModel} from '../../models/CommentModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;
  // comments: any;
  // comment: any;

  constructor() {
  }
}
