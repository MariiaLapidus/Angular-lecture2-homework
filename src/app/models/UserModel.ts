import {PostModel} from './PostModel';

export class UserModel {
  id: number;
  name: string;
  username: string;
  posts: PostModel[] = [];
}
