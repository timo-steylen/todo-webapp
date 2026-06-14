import {Component, effect, inject, ViewChild} from '@angular/core';
import {TodoService} from '../../services/todo-service';
import {Todo} from '../../models/todo.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatIcon} from '@angular/material/icon';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [
    MatTableModule,
    MatSortModule,
    MatIcon,
    RouterLink
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {

  @ViewChild(MatSort) sort!: MatSort;

  private todoService = inject(TodoService);
  private router = inject(Router);

  dataSource = new MatTableDataSource<Todo>();

  columns = [
    { key: 'id', header: 'Id' },
    { key: 'name', header: 'Naam' },
    { key: 'description', header: 'Beschrijving' },
    { key: 'tags', header: 'Tags' },
    { key: 'createdAt', header: 'Datum Aangemaakt' },
    { key: 'deadlineDate', header: 'Deadline Datum' },
    { key: 'completed', header: 'Completed' }
  ];

  displayedColumns = this.columns.map(c => c.key);

  constructor() {
    effect(() => {
      this.dataSource.data = this.todoService.todos();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
      this.todoService.getAllTodos();
  }

  routeTocreate() {
    this.router.navigate(['/create']);
  }
}
