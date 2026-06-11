import {Component, inject} from '@angular/core';
import {TodoService} from '../../services/todo-service';
import {Todo} from '../../models/todo.model';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  private todoService = inject(TodoService);

  todos: Todo[] = [];

  newTodo: Todo = {
    completed: false,
    createdAt: "",
    deadlineDate: undefined,
    tags: undefined,
    name: '',
    description: ''
  };

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getAllTodos().subscribe({
      next: todos => this.todos = todos
    });
  }

  addTodo(): void {

    if (!this.newTodo.name.trim()) {
      return;
    }

    this.todoService.createTodo(this.newTodo).subscribe({
      next: () => {
        this.newTodo = {
          completed: false,
          createdAt: "",
          deadlineDate: undefined,
          tags: undefined,
          name: '',
          description: ''
        };

        this.loadTodos();
      }
    });
  }
}
