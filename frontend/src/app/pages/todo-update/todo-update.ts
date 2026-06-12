import {Component, inject} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';
import {TodoService} from '../../services/todo-service';
import {Todo} from '../../models/todo.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-update',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatChipSet,
    MatChip,
    MatSlideToggle,
    MatButton
  ],
  templateUrl: './todo-update.html',
  styleUrl: './todo-update.scss',
})
export class TodoUpdate {

  private todoService = inject(TodoService);
  private router = inject(Router);

  todo: Todo = {
    name: '',
    id: 0n,
    description: '',
    tags: '',
    createdAt: '',
    deadlineDate: '',
    completed: false
  };

  ngOnInit(): void {
    this.loadTodo(1);
  }

  loadTodo(todoId: number) {}

  deleteTodo() {}
}
