import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './shared/header/header';
import {TodoService} from './services/todo-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
  private readonly todoService = inject(TodoService);

  constructor() {
    this.todoService.loadTodos();
  }
}
