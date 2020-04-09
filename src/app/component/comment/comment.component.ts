import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../models/CommentModel';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: CommentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
