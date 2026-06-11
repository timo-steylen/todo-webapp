import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdate } from './todo-update';

describe('TodoUpdate', () => {
  let component: TodoUpdate;
  let fixture: ComponentFixture<TodoUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoUpdate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
