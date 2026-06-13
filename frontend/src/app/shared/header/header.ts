import {Component, inject} from '@angular/core';
import {MatChip} from '@angular/material/chips';
import {MatToolbar} from '@angular/material/toolbar';
import {TodoService} from '../../services/todo-service';

@Component({
  selector: 'app-header',
  imports: [
    MatChip,
    MatToolbar
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private todoService = inject(TodoService);
  readonly openTodoCount = this.todoService.openTodoCount;
}
