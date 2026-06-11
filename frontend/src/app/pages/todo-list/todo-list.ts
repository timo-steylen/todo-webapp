import {Component, inject, ViewChild} from '@angular/core';
import {TodoService} from '../../services/todo-service';
import {Todo} from '../../models/todo.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-todo-list',
  imports: [
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {

  @ViewChild(MatSort) sort!: MatSort;

  private todoService = inject(TodoService);

  dataSource = new MatTableDataSource<Todo>();

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'tags',
    'createdAt',
    'deadlineDate',
    'completed'
  ];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    console.log("Todo's geladen");
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getAllTodos().subscribe({
      next: todos => this.dataSource.data = todos
    });
  }

}
